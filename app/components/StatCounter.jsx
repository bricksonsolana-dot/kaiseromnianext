import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export const StatCounter = ({ value, suffix = '', label, icon: Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.round(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {Icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 bg-steel/10 rounded-lg mb-4">
          <Icon className="w-6 h-6 text-steel" />
        </div>
      )}
      <div className="font-heading font-bold text-4xl lg:text-5xl text-white mb-2">
        {displayValue.toLocaleString('el-GR')}{suffix}
      </div>
      <p className="text-concrete text-sm">{label}</p>
    </motion.div>
  );
};

export default StatCounter;
