
"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader" className={loaded ? "loaded" : ""}>
      <div className="line"></div>
    </div>
  );
}
