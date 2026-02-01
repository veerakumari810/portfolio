import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  gsap.from(".hero-title", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" });
  
  gsap.utils.toArray(".card").forEach(card => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: "top 80%" },
      y: 24, opacity: 0, duration: 0.6, ease: "power2.out"
    });
  });
};