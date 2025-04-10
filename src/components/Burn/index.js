import React, { useEffect, useRef, useState } from 'react';

const B = ({
  children,
  fireFrequency = 300, // ms
  fireDuration = 3000, // ms
  fireSize = [10, 18], // random font size between 10px and 20px
  fireColor = '#FFC700',
  style,
  className,
}) => {

  const containerRef = useRef(null);
  const [fires, setFires] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();

        // pick a random position within the container
        const left = Math.random() * width * 0.8;
        const top = Math.random() * height * 0.5;

        // choose a random size from the range
        const [minSize, maxSize] = fireSize;
        const size = minSize + Math.random() * (maxSize - minSize);

        const newSparkle = {
          id: Date.now() + Math.random(), // unique id
          createdAt: Date.now(),
          style: {
            position: 'absolute',
            left,
            top,
            opacity: 0.8,
            fontSize: size,
            color: fireColor,
            pointerEvents: 'none',
            animation: `fireAnimation ${fireDuration}ms linear forwards`
          }
        };

        // remove old fires (older than fireDuration) and add the new one
        setFires((prev) => {
          const now = Date.now();
          const filtered = prev.filter(s => now - s.createdAt < fireDuration);
          return [...filtered, newSparkle];
        });
      }
    }, fireFrequency);

    return () => clearInterval(interval);
  }, [fireFrequency, fireDuration, fireSize, fireColor]);

  return (
    <span
      ref={containerRef}
      className={className}
      style={{ position: 'relative', display: 'inline-block', ...style }}
    >
      {children}
      {fires.map(s => (
        <span key={s.id} style={s.style}>
          🔥
        </span>
      ))}

      {/* define the keyframes for the burning animation */}
      <style>{`
        @keyframes fireAnimation {
          0% { opacity: 1; transform: scale(1) rotate(0deg); }
          100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
        }
      `}</style>
    </span>
  );
};

export default B;