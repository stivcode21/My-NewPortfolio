import AutoScroll from "@/components/autoScroll/AutoScroll";
import BlockHeader from "@/components/blockHeader/BlockHeader";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <div id="education" className={styles.container}>
      <BlockHeader title="Educación" hidden={true}>
        <span>
          Aquí muestro algunos de mis <strong>certificados y logros</strong>{" "}
          obtenidos con esfuerzo y dedicación. Me he{" "}
          <strong>formado de manera autodidacta</strong> a través de plataformas
          reconocidas. Cada curso ha sido clave para{" "}
          <strong>
            desarrollar habilidades en frontend, diseño y organización
          </strong>{" "}
          etc.
        </span>
      </BlockHeader>
      <AutoScroll />
    </div>
  );
};

export default Education;
