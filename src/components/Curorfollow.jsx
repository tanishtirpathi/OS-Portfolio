import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const iconRef = useRef(null);

  let mouseX = 0;
  let mouseY = 0;
  let iconX = 0;
  let iconY = 0;

  useEffect(() => {
    // Update mouse target (with some distance)
    const handleMove = (e) => {
      mouseX = e.clientX + 40;  // ← mouse se thoda right/distance
      mouseY = e.clientY + 40;  // ← mouse se thoda bottom/distance
    };

    window.addEventListener("mousemove", handleMove);

    // Smooth follow animation (lerp)
    const animate = () => {
      const el = iconRef.current;
      if (el) {
        iconX += (mouseX - iconX) * 0.3; 
        iconY += (mouseY - iconY) * 0.3;

        el.style.left = iconX + "px";
        el.style.top = iconY + "px";
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <img
      ref={iconRef}
      src="/icons/mikasa.png"
      className="pointer-events-none fixed w-12 h-18"
      style={{
        position: "fixed",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
