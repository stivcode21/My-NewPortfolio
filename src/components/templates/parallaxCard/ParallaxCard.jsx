import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./ParallaxCard.module.css";

const springConfig = {
  stiffness: 90,
  damping: 26,
  mass: 0.45,
};

const ParallaxCard = ({ id, className = "", onVisibleChange, children }) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = shouldReduceMotion ? [0, 0, 0, 0, 0] : [80, 28, 0, -28, -80];
  const scaleRange = shouldReduceMotion
    ? [1, 1, 1, 1, 1]
    : [0.965, 0.985, 1, 0.985, 0.965];
  const opacityRange = shouldReduceMotion
    ? [1, 1, 1, 1, 1]
    : [0.38, 0.72, 1, 0.72, 0.38];

  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.22, 0.5, 0.78, 1], yRange),
    springConfig,
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.22, 0.5, 0.78, 1], scaleRange),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.22, 0.5, 0.78, 1], opacityRange),
    springConfig,
  );

  useEffect(() => {
    const observedElement = ref.current;

    if (!observedElement || !onVisibleChange) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisibleChange(id);
        }
      },
      {
        root: null,
        threshold: 0.55,
      },
    );

    observer.observe(observedElement);

    return () => {
      observer.disconnect();
    };
  }, [id, onVisibleChange]);

  return (
    <motion.article
      ref={ref}
      id={id}
      className={`${styles.root} ${className}`.trim()}
      style={{ y, scale, opacity }}
    >
      {children}
    </motion.article>
  );
};

export default ParallaxCard;
