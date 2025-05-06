import { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import SectionHead from "@/components/sectionHead/sectionHead";
import SocialButton from "@/components/socialButton/socialButton";
import TextField from "@/components/textField/textField";
import { formatDateToSubmit } from "@/hooks/formatDate";
import ButtonBorder from "@/components/buttonBorder/buttonBorder";

export default function Contact() {
  const myEmail = "contacto@stivcode.com";

  const [contactData, setContactData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    message: false,
  });

  const [alertEmail, setAlertEmail] = useState(false);
  const [alertSubmit, setAlertSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // Extrae "name" y "value" del input
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      fullname: contactData.fullname === "", // true si está vacio
      email: contactData.email === "",
      message: contactData.message === "",
    };

    setErrors(newErrors);
    const allValid =
      !newErrors.fullname && !newErrors.email && !newErrors.message;

    if (allValid) {
      setContactData({
        fullname: "",
        email: "",
        message: "",
      });
      const localTime = formatDateToSubmit();

      const formData = {
        name: contactData.fullname,
        email: contactData.email,
        message: contactData.message,
        time: localTime,
      };

      // Enviar email
      emailjs
        .send(
          "service_hmsslq4", // Service ID
          "template_fisorjj", // Template ID
          formData,
          "DK3FhCdOa7Hjq0gba" // Public Key
        )
        .then(() => setAlertSubmit(true))
        .catch((error) =>
          console.error("Error al enviar el correo: ", error.text)
        );
    }
  };

  const handleEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setAlertEmail(true);
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
        <div className={styles.contactLeft}>
          <h3 className={styles.subtitle}>Hablemos por redes</h3>
          <span>
            <div className={styles.social}>
              <SocialButton iconName="discord" />
              <SocialButton iconName="dribbble" />
              <SocialButton iconName="github" />
            </div>
          </span>
        </div>
        <div className={styles.contactRight}>
          <h3 className={styles.subtitle}>Dejame tu mensaje</h3>
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
              />
              <TextField
                type="email"
                name="email"
                placeholder="Email de contacto"
                maxLength={50}
                onChange={handleChange}
                value={contactData.email}
                isValid={errors.email}
                errorMessage="Dejame tu email para conversar"
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
            />
            <div className={styles.btnContainer}>
              <ButtonBorder
                as="button"
                speed="5s"
                color="var(--text-primary)"
                onClick={(e) => handleSubmit(e)}
                type="submit"
                className={styles.btn}
              >
                Enviar
              </ButtonBorder>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
