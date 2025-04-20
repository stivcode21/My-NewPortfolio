import styles from "./sectionHead.module.css";

export default function SectionHead({ title, description }) {

	return (
		<header className={styles.header}>
			<span className={styles.headerRight}>
				<h3 className={styles.h3}>{title}</h3>
				<p className={styles.description}>{description}</p>
			</span>
		</header>
	);
}
