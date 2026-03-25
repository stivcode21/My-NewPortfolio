import { useState } from "react";
import styles from "./FormComment.module.css";
import { supabase } from "@/services/supabase";
import { formatDateToSubmit } from "@/hooks/formatDate";
import AnimatedBorderButton from "@/components/atoms/animatedBorderButton/AnimatedBorderButton";
import InputBox from "@/components/templates/inputBox/InputBox";
import { useNotification } from "@/components/templates/notificationProvider/notificationProvider";
import useModalFormStore from "@/store/ModalFormStore";
import { useTranslation } from "react-i18next";

const FormComment = () => {
  const localTime = formatDateToSubmit();
  const notify = useNotification();
  const { t } = useTranslation("contact");

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { commentDraft, setCommentDraft, setModalState, setBtnModalState } =
    useModalFormStore();

  const [errors, setErrors] = useState({
    name: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    url: "",
    date: localTime,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "",
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    if (commentDraft.trim() === "") {
      notify("Info", "Escribe tu comentario antes de enviarlo.");
      return;
    }

    setIsLoading(true);

    const { name, image, url, date } = formData;

    try {
      const { error } = await supabase.from("comments").insert([
        {
          name,
          image,
          comment: commentDraft,
          url,
          date,
          confirmed: false,
        },
      ]);

      if (error) throw error;

      setIsDisabled(true);
      setModalState(false);
      setBtnModalState(true);
      notify("Success", "Comentario enviado con éxito!");
      notify("Info", "Debes esperar la aprobación!");

      setFormData({
        name: "",
        image: "",
        url: "",
        date: localTime,
      });
      setCommentDraft("");
    } catch (error) {
      console.error("Error al insertar el comentario:", error.message);
      notify("Error", "Hubo un error al enviar tu comentario.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.header}>
        <p className={styles.intro}>{t("guestbook.form-intro")}</p>
        <ul className={styles.requirements}>
          <li>
            <strong>{t("guestbook.required-label")}</strong>
            {t("guestbook.required-value")}
          </li>
          <li>
            <strong>{t("guestbook.optional-label")}</strong>
            {t("guestbook.optional-value")}
          </li>
        </ul>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <InputBox
          type="text"
          name="name"
          placeholder={t("guestbook.name-placeholder")}
          maxLength={30}
          onChange={handleChange}
          value={formData.name}
          isValid={errors.name}
          disabled={isDisabled}
          errorMessage="Completá con tu nombre"
        />

        <InputBox
          type="url"
          name="image"
          placeholder={t("guestbook.img-placeholder")}
          onChange={handleChange}
          value={formData.image}
          isRequired={false}
          isValid={false}
          disabled={isDisabled}
          errorMessage="Agrega una URL valida"
        />

        <InputBox
          type="url"
          name="url"
          placeholder={t("guestbook.urlWebsite-placeholder")}
          onChange={handleChange}
          value={formData.url}
          isRequired={false}
          isValid={false}
          disabled={isDisabled}
          errorMessage="Agrega una URL valida"
        />

        <AnimatedBorderButton
          type="submit"
          disabled={isDisabled}
          className={styles.btn}
        >
          {isLoading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"
              >
                <animateTransform
                  attributeName="transform"
                  dur="0.6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </path>
            </svg>
          ) : (
            t("guestbook.btn-send")
          )}
        </AnimatedBorderButton>
      </form>
    </>
  );
};

export default FormComment;
