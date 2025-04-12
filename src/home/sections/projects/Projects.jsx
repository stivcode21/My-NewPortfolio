import { AnimatePresence, motion } from "framer-motion";
import styles from "./Projects.module.css";
import CardProject from "@/components/cardProject/cardProject";
import { dataProjects } from "../../../data/dataProjects";

export default function Projects() {


	return (
		<main className={styles.containerProjects}>
			<AnimatePresence>
				{dataProjects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.1 }}
						exit={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
						className={styles.motionCard}
						layout>
						<CardProject project={project} />
					</motion.div>
				))}
			</AnimatePresence>
		</main>
	);
}
