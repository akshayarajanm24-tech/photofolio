import Navbar from "@/components/comman/navbar";
import GalleryHead from "@/components/gallery/galleryhead";
import Gallery from "@/components/home/gallery";
import Footer from "@/components/comman/footer";
import ScrollTop from "@/components/comman/scrolltop";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <GalleryHead />
        <Gallery />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}