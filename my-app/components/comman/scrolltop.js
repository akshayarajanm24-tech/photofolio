"use client";

export default function ScrollTop() {
  const handleScrollTop = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      className="scroll-top d-flex align-items-center justify-content-center"
      onClick={handleScrollTop}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}