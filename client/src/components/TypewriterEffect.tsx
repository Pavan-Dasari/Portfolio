import { useState, useEffect, useRef } from "react";

const phrases = [
  "Product Manager",
  "Product Owner",
  "Project Manager",
  "Product Builder",
  "Business Strategist"
];

export default function TypewriterEffect() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const typeNextChar = () => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(100); // Normal speed when typing
      }
      
      // If word is complete, start deleting after pause
      if (!isDeleting && text === currentPhrase) {
        timerRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, 1500); // Pause before deleting
      } 
      // If deletion is complete, move to next word
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        timerRef.current = setTimeout(() => {}, 500); // Pause before typing next word
      } else {
        timerRef.current = setTimeout(typeNextChar, typingSpeed);
      }
    };
    
    timerRef.current = setTimeout(typeNextChar, typingSpeed);
    
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  return (
    <>
      <span className="text-[hsl(var(--primary))] font-bold glow-yellow">{text}</span>
      <span className="cursor"></span>
    </>
  );
}
