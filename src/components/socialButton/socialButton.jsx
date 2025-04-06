import React from "react";
import styles from "./socialButton.module.css";
import { dataBtnIcons } from "@/data/dataBtnIcons";

export default function SocialButton({ iconName, type = "primary" }) {
    const social = dataBtnIcons.find((item) => item.title === iconName);

    const handleEmail = () => {
        navigator.clipboard.writeText("stivenelcodificador@gmail.com");
    };

    return (
        <a
            className={`${styles.link} ${type === "secondary" ? styles.secondary : ""}`}
            href={social.url}
            rel="noreferrer"
            target={social.title !== "email" ? "_blank" : undefined}
            onClick={social.title === "email" ? handleEmail : undefined}
            aria-label={social.label}>
            {social.svg}
        </a>
    );
}
