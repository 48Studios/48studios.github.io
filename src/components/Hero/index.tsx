import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@app/lib/utils';

const Hero: React.FC<{
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center' | 'right';
}> = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <section className="bg-muted pb-16 pt-24 md:pb-24 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={cn(
          'container mx-auto flex px-4 md:px-6',
          alignment === 'center' && 'justify-center',
        )}
      >
        <div className={`max-w-4xl text-${alignment}`}>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mb-8 text-xl text-muted-foreground">{subtitle}</p>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
