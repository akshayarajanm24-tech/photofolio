
import Script from "next/script";

import "../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../public/assets/vendor/swiper/swiper-bundle.min.css";
import "../public/assets/vendor/glightbox/css/glightbox.min.css";
import "../public/assets/vendor/aos/aos.css";
import "../public/assets/css/main.css";

import AOSInitializer from "../components/AOSInitializer";
import ScrollTop from "../components/comman/scrolltop";
import Preloader from "../components/comman/preloader";

export const metadata = {
  title: "PhotoFolio | Photography Website",
  description: "Professional Photography Portfolio Website",
  icons: {
    icon: "/assets/img/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
         <Preloader />
        {children}
        <ScrollTop />

        <AOSInitializer />

        <Script
          src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/vendor/swiper/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/vendor/glightbox/js/glightbox.min.js"
          strategy="afterInteractive"
        />

        {/* <Script
          src="/assets/vendor/php-email-form/validate.js"
          strategy="afterInteractive"
        /> */}

        <Script
          src="/assets/js/main.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
