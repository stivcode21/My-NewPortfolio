import {
  Fragment,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CardBlog from "@/components/organisms/cardBlog/CardBlog";
import styles from "./TimelineBlog.module.css";

const TimelineBlog = ({ chapters, activeId, onActivate }) => {
  const railRef = useRef(null);
  const cardRefs = useRef({});
  const markerRefs = useRef({});
  const [fillPx, setFillPx] = useState(0);

  const activeIndex = Math.max(
    0,
    chapters.findIndex((c) => c.id === activeId),
  );

  const items = useMemo(
    () =>
      chapters.map((chapter) => ({
        ...chapter,
        markerLabel: chapter.featured
          ? "Capítulo destacado"
          : `Capítulo ${String(chapter.number).padStart(2, "0")}`,
      })),
    [chapters],
  );

  useLayoutEffect(() => {
    let raf = 0;
    const start = performance.now();
    const SETTLE_MS = 320;

    const measure = () => {
      const rail = railRef.current;
      const marker = markerRefs.current[activeId];
      if (!rail || !marker) return;
      const railRect = rail.getBoundingClientRect();
      const markerRect = marker.getBoundingClientRect();
      const target =
        markerRect.top + markerRect.height / 2 - railRect.top;
      setFillPx(Math.max(0, target));
    };

    const tick = () => {
      measure();
      if (performance.now() - start < SETTLE_MS) {
        raf = requestAnimationFrame(tick);
      }
    };

    measure();
    raf = requestAnimationFrame(tick);

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [activeId, chapters.length]);

  const handleSelect = (id) => {
    onActivate(id);
    const node = cardRefs.current[id];
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className={styles.grid}>
      <div ref={railRef} className={styles.rail} aria-hidden="true">
        <div
          className={styles.railFill}
          style={{ height: `${fillPx}px` }}
        />
      </div>

      {items.map((chapter, i) => {
        const isActive = chapter.id === activeId;
        const isReached = i <= activeIndex;
        return (
          <Fragment key={chapter.id}>
            <button
              type="button"
              ref={(el) => {
                markerRefs.current[chapter.id] = el;
              }}
              className={styles.marker}
              data-active={isActive}
              data-reached={isReached}
              onClick={() => handleSelect(chapter.id)}
              aria-label={`Ir a ${chapter.markerLabel}: ${chapter.title}`}
            >
              <span className={styles.markerDate}>{chapter.date}</span>
              <span className={styles.markerLabel}>
                {chapter.markerLabel}
              </span>
              <span className={styles.markerDot} aria-hidden="true" />
            </button>

            <div
              ref={(el) => {
                cardRefs.current[chapter.id] = el;
              }}
              className={styles.cardCell}
            >
              <CardBlog
                chapter={chapter}
                isActive={isActive}
                onActivate={onActivate}
              />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default TimelineBlog;
