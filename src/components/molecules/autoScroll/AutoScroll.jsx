import { useEffect, useRef } from "react";
import styles from "./AutoScroll.module.css";
import { carouselCertifications } from "@/data/dataEducation";
import { useNavigate } from "react-router-dom";
import CertificateCard from "@/components/molecules/certificateCard/CertificateCard";

const LOOP_COPIES = 3;
const AUTO_SPEED = 1.0; // px per frame (~27px/s at 60fps)
const DRAG_CLICK_THRESHOLD = 8;

const AutoScroll = () => {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragMovedRef = useRef(false);
  const pointerIdRef = useRef(null);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const originOffsetRef = useRef(0);
  const axisLockedRef = useRef(null); // "x" | "y" | null
  const reduceMotionRef = useRef(false);

  const measureSetWidth = () => {
    const track = trackRef.current;
    if (!track) return;
    // One logical set = total width / copies (includes gaps via scrollWidth)
    setWidthRef.current = track.scrollWidth / LOOP_COPIES;
  };

  const normalizeOffset = (value) => {
    const width = setWidthRef.current;
    if (!width) return value;

    let next = value;
    while (next <= -width) next += width;
    while (next > 0) next -= width;
    return next;
  };

  const applyTransform = () => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = media.matches;

    const onMotionChange = () => {
      reduceMotionRef.current = media.matches;
      if (media.matches) {
        offsetRef.current = 0;
        applyTransform();
      }
    };

    media.addEventListener?.("change", onMotionChange);
    measureSetWidth();
    applyTransform();

    const onResize = () => {
      measureSetWidth();
      offsetRef.current = normalizeOffset(offsetRef.current);
      applyTransform();
    };

    window.addEventListener("resize", onResize);

    let frameId = 0;
    const tick = () => {
      if (
        !reduceMotionRef.current &&
        !pausedRef.current &&
        !draggingRef.current
      ) {
        offsetRef.current = normalizeOffset(offsetRef.current - AUTO_SPEED);
        applyTransform();
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      media.removeEventListener?.("change", onMotionChange);
    };
  }, []);

  const handleCardClick = (url) => {
    if (dragMovedRef.current) return;
    navigate(`/education/${url}`);
  };

  const pause = () => {
    pausedRef.current = true;
  };

  const resume = () => {
    if (!draggingRef.current) pausedRef.current = false;
  };

  const onPointerDown = (event) => {
    // Only primary button / touch
    if (event.pointerType === "mouse" && event.button !== 0) return;

    measureSetWidth();
    draggingRef.current = true;
    dragMovedRef.current = false;
    axisLockedRef.current = null;
    pointerIdRef.current = event.pointerId;
    startXRef.current = event.clientX;
    startYRef.current = event.clientY;
    originOffsetRef.current = offsetRef.current;
    pause();

    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!draggingRef.current || pointerIdRef.current !== event.pointerId) {
      return;
    }

    const dx = event.clientX - startXRef.current;
    const dy = event.clientY - startYRef.current;

    // Let vertical page scroll win on mobile until axis is clear
    if (!axisLockedRef.current) {
      if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
      axisLockedRef.current = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
      if (axisLockedRef.current === "y") {
        // Abort horizontal drag; allow native scroll
        draggingRef.current = false;
        pointerIdRef.current = null;
        event.currentTarget.releasePointerCapture?.(event.pointerId);
        resume();
        return;
      }
    }

    if (axisLockedRef.current !== "x") return;

    event.preventDefault();
    if (Math.abs(dx) > DRAG_CLICK_THRESHOLD) {
      dragMovedRef.current = true;
    }

    offsetRef.current = normalizeOffset(originOffsetRef.current + dx);
    applyTransform();
  };

  const endDrag = (event) => {
    if (pointerIdRef.current !== event.pointerId) return;

    draggingRef.current = false;
    pointerIdRef.current = null;
    axisLockedRef.current = null;

    try {
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    } catch {
      // ignore if already released
    }

    // Keep click suppressed briefly so the synthetic click after drag is ignored
    if (dragMovedRef.current) {
      window.setTimeout(() => {
        dragMovedRef.current = false;
      }, 50);
    }

    resume();
  };

  const loopItems = Array.from({ length: LOOP_COPIES }, () =>
    carouselCertifications,
  ).flat();

  return (
    <div className={styles.container}>
      <div
        className={styles.slider}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className={styles.slideTrack} ref={trackRef}>
          {loopItems.map((cert, index) => (
            <div className={styles.slide} key={`${cert.url}-${index}`}>
              <CertificateCard
                url={cert.url}
                img={cert.img}
                bg_img={cert.bg_img}
                bg_opacity={cert.bg_opacity}
                logo={cert.logo}
                title={cert.title}
                category={cert.category}
                subtitle={cert.subtitle}
                platform={cert.platform}
                accent={cert.accent}
                date={cert.date}
                duration={cert.duration}
                tags={cert.tags || cert.skills}
                onClick={handleCardClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScroll;
