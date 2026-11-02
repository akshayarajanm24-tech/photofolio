import Navbar from "@/components/comman/navbar";
import ContactHead from "@/components/contact/contacthead";
import ContactForm from "@/components/contact/contactform";
import Footer from "@/components/comman/footer";
import ScrollTop from "@/components/comman/scrolltop";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ContactHead />
        <ContactForm />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}