import { useState } from "react";
import styles from "./FormComment.module.css";
import { supabase } from "@/services/supabase";
import { formatDateToSubmit } from "@/hooks/formatDate";
import AnimatedBorderButton from "../atoms/animatedBorderButton/AnimatedBorderButton";
import InputBox from "../templates/inputBox/InputBox";
import { useNotification } from "../templates/notificationProvider/notificationProvider";
import useModalFormStore from "@/store/ModalFormStore";
import { useTranslation } from "react-i18next";

const FormComment = () => {
  const localTime = formatDateToSubmit();
  const notify = useNotification();
  const { t } = useTranslation("contact");

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { setModalState, setBtnModalState } = useModalFormStore();

  // Estado para los errores de los inputs
  const [errors, setErrors] = useState({
    name: false,
    image: false,
    comment: false,
    url: false,
  });

  //data del formulario
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    comment: "",
    url: "",
    date: localTime,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de los campos usando el estado correcto
    const newErrors = {
      name: formData.name === "",
      image: formData.image === "",
      comment: formData.comment === "",
      url: formData.url === " ",
    };
    setErrors(newErrors);

    // Si hay errores, no continúes
    if (Object.values(newErrors).some((error) => error)) {
      return; // Detén la ejecución si hay errores
    }
    setIsLoading(true); // Mostrar loader

    const { name, image, comment, url, date } = formData;
    try {
      const { error } = await supabase
        .from("comments")
        .insert([{ name, image, comment, url, date, confirmed: false }]);
      if (error) throw error;
      setIsDisabled(true);

      // Notificaciones de éxito
      setModalState(false);
      setBtnModalState(true);
      notify("Success", "Comentario enviado con éxito!");
      notify("Info", "Debes esperar la aprobación!");

      // Reinicia el formulario correctamente
      setFormData({
        name: "",
        image: "",
        comment: "",
        url: "",
        date: "",
      });
    } catch (error) {
      console.error("Error al insertar el comentario:", error.message);
      notify("Error", "Hubo un error al enviar tu comentario.");
    } finally {
      setIsLoading(false); // Ocultar loader siempre
    }
  };

  return (
    <>
      <p className={styles.header}>
        {t("guestbook.text-1")}
        <strong>{t("guestbook.strong-1")}</strong>
        {t("guestbook.text-2")}
        <strong>{t("guestbook.strong-2")}</strong>
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <InputBox
          type="text"
          name="name"
          placeholder={t("guestbook.name-placeholder")}
          maxLength={30}
          onChange={handleChange}
          isValid={errors.name}
          disabled={isDisabled}
          errorMessage="Completá con tu nombre"
        />

        <InputBox
          type="url"
          name="image"
          placeholder={t("guestbook.img-placeholder")}
          onChange={handleChange}
          isValid={errors.image}
          disabled={isDisabled}
          errorMessage="Agrega una URL valida"
        />

        <InputBox
          type="url"
          name="url"
          placeholder={t("guestbook.urlWebsite-placeholder")}
          onChange={handleChange}
          isValid={errors.url}
          disabled={isDisabled}
          errorMessage="Agrega una URL valida"
        />

        <InputBox
          type="textarea"
          name="comment"
          placeholder={t("guestbook.comment-placeholder")}
          maxLength={3000}
          onChange={handleChange}
          isValid={errors.comment}
          disabled={isDisabled}
          errorMessage="Agrega un comentario porfavor!"
        />

        {/* Boton de envio */}

        <AnimatedBorderButton
          type="submit"
          disabled={isDisabled}
          className={styles.btn}
        >
          {isLoading ? ( // Mostrar loader mientras se envía el correo
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
