import Navbar from "@/components/comman/navbar";
import BlogSection from "@/components/blog/blogsection";
import BlogHead from "@/components/blog/bloghead";
import Footer from "@/components/comman/footer";
import ScrollTop from "@/components/comman/scrolltop";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <BlogHead />
        <BlogSection />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}