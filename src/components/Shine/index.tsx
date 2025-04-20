/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect, useRef, useState } from 'react';
import sparkle from "./sparkle.svg"

interface SparkleItem {
  id: number;
  createdAt: number;
  style: React.CSSProperties;
}

const S: React.FC<ShineProps> = ({
  children,
  duration = 1000, // ms
  interval = 200, // ms
  style,
  className,
}) => {

  const containerRef = useRef<HTMLSpanElement>(null);
  const [sparkles, setSparkles] = useState<SparkleItem[]>([]);
  const sparkleSize = [4, 12]; // random font size between 4px and 12px
  const sparkleDuration = duration;
  const sparkleFrequency = interval;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();

        // pick a random position within the container
        const left = Math.random() * width * 0.8;
        const top = Math.random() * height * 0.5;

        // choose a random size from the range
        const [minSize, maxSize] = sparkleSize;
        const size = minSize + Math.random() * (maxSize - minSize);

        const newSparkle: SparkleItem = {
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
          } as React.CSSProperties
        };

        // remove old sparkles (older than sparkleDuration) and add the new one
        setSparkles((prev) => {
          const now = Date.now();
          const filtered = prev.filter(s => now - s.createdAt < sparkleDuration);
          return [...filtered, newSparkle];
        });
      }
    }, sparkleFrequency);

    return () => clearInterval(intervalId);
  }, [sparkleFrequency, sparkleDuration, sparkleSize]);

  return (
    <span
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
    </span>
  );
};

export default S;