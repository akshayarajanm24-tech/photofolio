
import Navbar from "@/components/comman/navbar";
import AboutHeader from "@/components/about/aboutheader";
import AboutSection from "@/components/about/aboutsection";
import Testimonals from "@/components/about/testimonals";
import Footer from "@/components/comman/footer";
import ScrollTop from "@/components/comman/scrolltop";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main id="main">
        <AboutHeader />
        <AboutSection />
        <Testimonals />
      </main>

      <Footer />

      <ScrollTop />
    </>
  );
}
