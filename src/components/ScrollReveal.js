'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ScrollReveal({ 
  children, 
  animation = 'up', 
  delay = 0, 
  className = '', 
  threshold = 0.1,
  once = true 
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold, once });

  const animationClasses = {
    up: 'scroll-animate',
    left: 'scroll-animate-left',
    right: 'scroll-animate-right',
    scale: 'scroll-animate-scale',
    fade: 'scroll-animate-fade'
  };

  const delayClass = delay > 0 ? `stagger-${Math.min(delay, 6)}` : '';
  
  return (
    <div 
      ref={ref}
      className={`${animationClasses[animation]} ${isVisible ? 'visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
