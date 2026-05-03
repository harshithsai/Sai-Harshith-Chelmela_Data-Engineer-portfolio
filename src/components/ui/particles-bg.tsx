"use client";

import { useEffect, useCallback } from "react";

export default function ParticlesBg() {
  const initParticles = useCallback(() => {
    // cleanup old canvas
    const oldCanvas = document.querySelector("#particles-js canvas");
    if (oldCanvas) oldCanvas.remove();

    // @ts-ignore
    if (window.pJSDom?.length > 0) {
      // @ts-ignore
      window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
      // @ts-ignore
      window.pJSDom = [];
    }

    // Adjusted colors for a professional dark theme (white/grey particles)
    const colors = {
      particles: "#ffffff",
      lines: "#ffffff",
      accent: "#ffffff",
    };

    // @ts-ignore
    if (typeof window.particlesJS === "undefined") return;

    // @ts-ignore
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: colors.particles },
        shape: { type: "circle", stroke: { width: 0, color: "#000" } },
        opacity: {
          value: 0.3,
          random: true,
          anim: { enable: true, speed: 0.5, opacity_min: 0.1 },
        },
        size: {
          value: 2.5,
          random: true,
          anim: { enable: true, speed: 1, size_min: 1 },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: colors.lines,
          opacity: 0.15,
          width: 0.8,
        },
        move: { 
          enable: true, 
          speed: 1, 
          direction: "none", 
          random: true, 
          straight: false, 
          out_mode: "out", 
          bounce: false 
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.4 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scriptId = "particles-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        initParticles();
      };
    } else {
      // @ts-ignore
      if (window.particlesJS) {
        initParticles();
      }
    }

    return () => {
      // We don't remove the script to avoid re-fetching, but we clean up the canvas
      const canvas = document.querySelector("#particles-js canvas");
      if (canvas) canvas.remove();
    };
  }, [initParticles]);

  return (
    <div
      id="particles-js"
      className="fixed inset-0 w-full h-full z-0 bg-black pointer-events-none"
    />
  );
}
