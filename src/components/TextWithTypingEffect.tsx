import React, { useEffect, useState } from 'react';

interface Props {
  text: string;
  intervalTime?: number;
}

const TextWithTypingEffect: React.FC<Props> = ({ text, intervalTime = 33 }) => {
  const [visibleCharacters, setVisibleCharacters] = useState(1);

  // If text is changed, reset visible characters
  useEffect(() => {
    setVisibleCharacters(1);
  }, [text]);

  // Show text character by character
  useEffect(() => {
    if (visibleCharacters < text.length) {
      const interval = setInterval(() => {
        setVisibleCharacters((prev) => prev + 1);
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [intervalTime, text, visibleCharacters]);

  return <span>{text.slice(0, visibleCharacters)}</span>;
};

export default TextWithTypingEffect;
