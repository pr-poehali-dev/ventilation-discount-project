import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function useInView() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
}

export function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, isVisible } = useInView();
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

export const VK_ICON = (
  <svg className="w-5 h-5" viewBox="0 0 48 48" fill="currentColor">
    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm9.68 24.645c.667.66 1.373 1.282 1.996 1.988.277.314.542.637.76.998.31.517.028 1.085-.254 1.117l-3.332-.002c-.868.072-1.56-.274-2.157-.87-.495-.493-.954-.996-1.427-1.498-.2-.212-.406-.41-.648-.572-.455-.306-.852-.214-1.104.264-.257.485-.316 1.016-.345 1.55-.04.786-.306.992-1.098 1.03-1.693.077-3.3-.177-4.8-1.025-1.324-.75-2.35-1.798-3.24-2.987-1.734-2.317-3.06-4.89-4.24-7.548-.246-.556-.065-.855.555-.866.93-.015 1.86-.013 2.79-.002.378.01.63.233.788.58.558 1.22 1.23 2.37 2.05 3.44.21.274.424.55.713.745.33.223.583.153.74-.214.103-.24.15-.496.175-.753.08-.837.09-1.672-.017-2.506-.063-.49-.307-.807-.797-.898-.25-.046-.213-.134-.092-.27.193-.217.375-.352.737-.352h2.713c.428.085.522.277.58.707l.002 3.015c-.003.2.1.794.46.926.29.09.48-.13.653-.332.783-.908 1.342-1.96 1.84-3.052.22-.478.412-.97.595-1.466.136-.368.348-.545.754-.537l3.563.003c.105 0 .212.002.315.02.495.085.63.304.48.79-.24.78-.662 1.44-1.09 2.096-.456.7-.944 1.375-1.4 2.074-.42.64-.387.962.126 1.494z"/>
  </svg>
);

export const TG_ICON = (
  <svg className="w-5 h-5" viewBox="0 0 48 48" fill="currentColor">
    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm9.697 14.09l-3.394 16.012c-.254 1.13-1.015 1.41-2.054.88l-5.67-4.18-2.736 2.635c-.303.303-.557.557-1.14.557l.407-5.785 10.53-9.514c.457-.407-.1-.633-.71-.226l-13.01 8.194-5.606-1.753c-1.22-.383-1.244-1.22.254-1.804l21.928-8.453c1.015-.38 1.903.226 1.575 1.805z"/>
  </svg>
);
