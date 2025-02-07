import React, { useEffect, useRef, useState } from 'react';

const ET = ({
  children,
  emoji,
  emojiFrequency = 200, // ms
  emojiDuration = 2000, // ms
  emojiSize = [8, 16], // random font size between 10px and 20px
  emojiColor = '#FFC700',
  style,
  className,
}) => {

  const containerRef = useRef(null);
  const [emojis, setEmoji] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();

        // pick a random position within the container
        const left = Math.random() * width * 0.8;
        const top = Math.random() * height * 0.5;

        // choose a random size from the range
        const [minSize, maxSize] = emojiSize;
        const size = minSize + Math.random() * (maxSize - minSize);

        const newSparkle = {
          id: Date.now() + Math.random(), // unique id
          createdAt: Date.now(),
          style: {
            position: 'absolute',
            left,
            top,
            fontSize: size,
            color: emojiColor,
            pointerEvents: 'none',
            animation: `emojiAnimation ${emojiDuration}ms linear forwards`
          }
        };

        // remove old emojis (older than emojiDuration) and add the new one
        setEmoji((prev) => {
          const now = Date.now();
          const filtered = prev.filter(s => now - s.createdAt < emojiDuration);
          return [...filtered, newSparkle];
        });
      }
    }, emojiFrequency);

    return () => clearInterval(interval);
  }, [emojiFrequency, emojiDuration, emojiSize, emojiColor]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', display: 'inline-block', ...style }}
    >
      {children}
      {emojis.map(s => (
        <span key={s.id} style={s.style}>
          {emoji}
        </span>
      ))}

      {/* define the keyframes for the animation */}
      <style>{`
        @keyframes emojiAnimation {
          0% { opacity: 1; transform: scale(1) rotate(0deg); }
          100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default ET;