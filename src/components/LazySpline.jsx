// LazySpline.jsx
import React from 'react';
import Spline from '@splinetool/react-spline';
import { useInView } from 'react-intersection-observer';

const LazySpline = ({ scene, className }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={className}>
      {inView && <Spline scene={scene} />}
    </div>
  );
};

export default LazySpline;
