"use client";

import { useEffect, useState } from "react";

export default function TypingAnimation() {
  const roles = [
    "Front-end Developer",
    "Back-end Developer",
    "Full-Stack Developer",
  ];
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Typing or deleting
      setSpeed(isDeleting ? 50 : 100);
      timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentRoleIndex, isDeleting, speed, roles]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}
