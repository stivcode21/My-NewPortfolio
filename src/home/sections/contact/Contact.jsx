import { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import SectionHead from "@/components/sectionHead/sectionHead";
import TextField from "@/components/textField/textField";
import { formatDateToSubmit } from "@/hooks/formatDate";
import ButtonBorder from "@/components/buttonBorder/buttonBorder";
import { useNotification } from "@/components/notificationProvider/notificationProvider";
import CommentList from "@/components/commentList/commentList";
import Modal from "../../../components/modal/modal";
import CommentForm from "../../../components/commentForm/commentForm";
import useModalFormStore from "../../../store/ModalFormStore";

export default function Contact() {
  const notify = useNotification();
  const localTime = formatDateToSubmit();

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
      <SectionHead title="Contáctame" ifExist={true}>
        <span>
          Estoy disponible para colaborar en proyectos que requieran{" "}
          <strong>
            creatividad y habilidades en diseño y desarrollo frontend
          </strong>
          . ¡No dudes en ponerte en contacto conmigo!
        </span>
      </SectionHead>
      <div className={styles.contact}>
        {/* Content left */}
        <div className={styles.contactLeft}>
          <CommentList />
        </div>
        {/* Content right */}
        <div className={styles.contactRight}>
          <h3 className={styles.subtitle}>
            {isDisabled ? "¡Gracias por tu mensaje!" : "Dejame un mensaje"}
          </h3>
          <form className={styles.form}>
            <span>
              <TextField
                type="text"
                name="fullname"
                placeholder="¿Cómo te llamás?"
                maxLength={30}
                onChange={handleChange}
                value={contactData.fullname}
                isValid={errors.fullname}
                errorMessage="Completá con tu nombre"
                disabled={isDisabled}
              />
              <TextField
                type="email"
                name="email"
                placeholder="Email de contacto"
                maxLength={50}
                onChange={handleChange}
                value={contactData.email}
                isValid={errors.email}
                errorMessage="Dejame un email válido"
                disabled={isDisabled}
              />
            </span>
            <TextField
              type="textarea"
              name="message"
              placeholder="¿Cómo podemos colaborar?"
              maxLength={2000}
              onChange={handleChange}
              value={contactData.message}
              isValid={errors.message}
              errorMessage="Compartime tu propuesta antes de enviar"
              disabled={isDisabled}
            />
            <div className={styles.btnContainer}>
              {isDisabled ? (
                ""
              ) : (
                <ButtonBorder
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
                    "Enviar"
                  )}
                </ButtonBorder>
              )}
            </div>
          </form>
        </div>
      </div>
      <Modal isOpen={modalState} onClose={() => setModalState(false)}>
        <CommentForm />
      </Modal>
    </section>
  );
}
