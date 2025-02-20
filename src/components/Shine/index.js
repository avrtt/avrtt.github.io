import React, { useEffect, useRef, useState } from 'react';
import sparkle from "./sparkle.svg"

const S = ({
  children,
  sparkleFrequency = 200, // ms
  sparkleDuration = 1000, // ms
  sparkleSize = [4, 12], // random font size between 10px and 20px
  style,
  className,
}) => {

  const containerRef = useRef(null);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();

        // pick a random position within the container
        const left = Math.random() * width * 0.8;
        const top = Math.random() * height * 0.5;

        // choose a random size from the range
        const [minSize, maxSize] = sparkleSize;
        const size = minSize + Math.random() * (maxSize - minSize);

        const newSparkle = {
          id: Date.now() + Math.random(), // unique id
          createdAt: Date.now(),
          style: {
            position: 'absolute',
            left,
            top,
            opacity: 0.9,
            width: size,
            pointerEvents: 'none',
            animation: `sparkleAnimation ${sparkleDuration}ms linear forwards`
          }
        };

        // remove old sparkles (older than sparkleDuration) and add the new one
        setSparkles((prev) => {
          const now = Date.now();
          const filtered = prev.filter(s => now - s.createdAt < sparkleDuration);
          return [...filtered, newSparkle];
        });
      }
    }, sparkleFrequency);

    return () => clearInterval(interval);
  }, [sparkleFrequency, sparkleDuration, sparkleSize]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', display: 'inline-block', ...style }}
    >
      {children}
      {sparkles.map(s => (
        <img key={s.id} src={sparkle} style={s.style} alt="sparkle" />
      ))}

      {/* define the keyframes for the sparkle animation */}
      <style>{`
        @keyframes sparkleAnimation {
          0% { opacity: 1; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(90deg); }
          100% { opacity: 0.8; transform: scale(0) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default S;