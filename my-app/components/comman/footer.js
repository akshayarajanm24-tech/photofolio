export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>PhotoFolio</span></strong>. All Rights Reserved
          </div>

          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}