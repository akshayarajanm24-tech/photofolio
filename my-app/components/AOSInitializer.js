
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AOSInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    let script = document.querySelector("#aos-script");

    const initializeAOS = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });

        window.AOS.refreshHard();
      }
    };

    if (window.AOS) {
      initializeAOS();
    } else if (!script) {
      script = document.createElement("script");
      script.id = "aos-script";
      script.src = "/assets/vendor/aos/aos.js";
      script.onload = initializeAOS;
      document.body.appendChild(script);
    } else {
      script.addEventListener("load", initializeAOS, { once: true });
    }

    return () => {
      if (script) {
        script.removeEventListener("load", initializeAOS);
      }
    };
  }, [pathname]);

  return null;
}
