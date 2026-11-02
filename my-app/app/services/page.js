import Navbar from "@/components/comman/navbar";
import ServiceHead from "@/components/services/servicehead";
import ServiceSection from "@/components/services/servicesection";
import PriceSection from "@/components/services/pricesection";
import Testimonals from "@/components/about/testimonals";
import Footer from "@/components/comman/footer";
import ScrollTop from "@/components/comman/scrolltop";

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ServiceHead />
        <ServiceSection />
        <PriceSection />
        <Testimonals />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}