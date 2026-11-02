
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileNav = () => {
    setIsMobileOpen(false);
  };

  const toggleMobileNav = () => {
    setIsMobileOpen((prev) => !prev);
  };

  // Close menu whenever route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Keep body class synchronized with React state
  useEffect(() => {
    document.body.classList.toggle("mobile-nav-active", isMobileOpen);

    return () => {
      document.body.classList.remove("mobile-nav-active");
    };
  }, [isMobileOpen]);

  const isActive = (path) => {
    return pathname === path ? "active" : "";
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        <Link
          href="/"
          onClick={closeMobileNav}
          className="logo d-flex align-items-center me-auto me-lg-0"
        >
          <i className="bi bi-camera"></i>
          <h1>PhotoFolio</h1>
        </Link>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link href="/" onClick={closeMobileNav} className={isActive("/")}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={closeMobileNav} className={isActive("/about")}>
                About
              </Link>
            </li>

            <li>
              <Link href="/gallery" onClick={closeMobileNav} className={isActive("/gallery")}>
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/blog" onClick={closeMobileNav} className={isActive("/blog")}>
                Blog
              </Link>
            </li>

            <li>
              <Link href="/services" onClick={closeMobileNav} className={isActive("/services")}>
                Services
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={closeMobileNav} className={isActive("/contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-social-links">
          <a href="#" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <i
          className={`mobile-nav-toggle mobile-nav-show bi bi-list ${
            isMobileOpen ? "d-none" : ""
          }`}
          onClick={toggleMobileNav}
        ></i>

        <i
          className={`mobile-nav-toggle mobile-nav-hide bi bi-x ${
            isMobileOpen ? "" : "d-none"
          }`}
          onClick={toggleMobileNav}
        ></i>

      </div>
    </header>
  );
}
