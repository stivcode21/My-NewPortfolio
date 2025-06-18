import { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import { formatDateToSubmit } from "@/hooks/formatDate";
import useModalFormStore from "@/store/ModalFormStore";
import { useNotification } from "@/components/templates/notificationProvider/notificationProvider";
import BlockHeader from "@/components/molecules/blockHeader/BlockHeader";
import InputBox from "@/components/inputBox/InputBox";
import AnimatedBorderButton from "@/components/atoms/animatedBorderButton/AnimatedBorderButton";
import Comments from "@/components/organisms/comments/Comments";
import ModalOverlay from "@/components/templates/modalOverlay/ModalOverlay";
import FormComment from "@/components/formComment/FormComment";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const notify = useNotification();
  const localTime = formatDateToSubmit();
  const { t } = useTranslation("contact");

  // Estado para los datos del formulario
  const [contactData, setContactData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  // Estado para los errores de los inputs
  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    message: false,
  });

  // Estado para el loader, modal y la deshabilitación del formulario
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { modalState, setModalState } = useModalFormStore();

  // Estado para controlar el límite de correos enviados
  const [sentEmails, setSentEmails] = useState(0);

  // Validación de correo con expresiones regulares
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/; // Valida que tenga @ y dominio válido
    return emailRegex.test(email);
  };

  // Manejador de eventos para los inputs
  const handleChange = (e) => {
    const { name, value } = e.target; // Extrae "name" y "value" del input
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejador para el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      fullname: contactData.fullname === "", // true si está vacío
      email: !isValidEmail(contactData.email), // Valida email
      message: contactData.message === "",
    };

    setErrors(newErrors);

    const allValid =
      !newErrors.fullname && !newErrors.email && !newErrors.message;

    if (allValid) {
      // Verificar si se alcanzó el límite de envíos
      if (sentEmails >= 3) {
        notify("Info", "Has alcanzado el límite de envíos permitidos.");
        return;
      }

      setIsLoading(true); // Mostrar loader

      const formData = {
        name: contactData.fullname,
        email: contactData.email,
        message: contactData.message,
        time: localTime,
      };

      // Enviar email
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_ID, // Service ID
          "template_fisorjj", // Template ID
          formData,
          import.meta.env.VITE_EMAILJS_PUCLIC_KEY // Public Key
        )
        .then(() => {
          notify("Success", "Mensaje enviado correctamente");
          setSentEmails((prev) => prev + 1); // Incrementar el contador de correos enviados
          setIsDisabled(true); // Deshabilitar el formulario después de enviar
          setContactData({
            fullname: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          notify("Error", "Error al enviar el mensaje, intente nuevamente.");
          console.error("Error al enviar el correo: ", error.text);
        })
        .finally(() => setIsLoading(false)); // Ocultar loader
    }
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <BlockHeader title={t("head.title")} ifExist={true}>
        <span>
          {t("head.text-1")}
          <strong>{t("head.strong-1")}</strong>
          {t("head.text-2")}
        </span>
      </BlockHeader>
      <div className={styles.contact}>
        {/* Content left */}
        <div className={styles.contactLeft}>
          <Comments />
        </div>
        {/* Content right */}
        <div className={styles.contactRight}>
          <h3 className={styles.subtitle}>
            {isDisabled ? t("contact.title-state2") : t("contact.title-state1")}
          </h3>
          <form className={styles.form}>
            <span>
              <InputBox
                type="text"
                name="fullname"
                placeholder={t("contact.name-placeholder")}
                maxLength={30}
                onChange={handleChange}
                value={contactData.fullname}
                isValid={errors.fullname}
                errorMessage={t("contact.name-error")}
                disabled={isDisabled}
              />
              <InputBox
                type="email"
                name="email"
                placeholder={t("contact.email-placeholder")}
                maxLength={50}
                onChange={handleChange}
                value={contactData.email}
                isValid={errors.email}
                errorMessage={t("contact.email-error")}
                disabled={isDisabled}
              />
            </span>
            <InputBox
              type="textarea"
              name="message"
              placeholder={t("contact.textarea-placeholder")}
              maxLength={2000}
              onChange={handleChange}
              value={contactData.message}
              isValid={errors.message}
              errorMessage={t("contact.textarea-error")}
              disabled={isDisabled}
            />
            <div className={styles.btnContainer}>
              {isDisabled ? (
                ""
              ) : (
                <AnimatedBorderButton
                  onClick={(e) => handleSubmit(e)}
                  type="submit"
                  className={styles.btn}
                  disabled={isDisabled}
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
                    t("contact.btn-send")
                  )}
                </AnimatedBorderButton>
              )}
            </div>
          </form>
        </div>
      </div>
      <ModalOverlay isOpen={modalState} onClose={() => setModalState(false)}>
        <FormComment />
      </ModalOverlay>
    </section>
  );
}
