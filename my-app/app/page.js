import Image from "next/image";
// import styles from "./page.module.css";
import Navbar from "@/components/comman/navbar";
import Footer from "@/components/comman/footer";

import Hero from "@/components/home/hero";
import Gallery from "@/components/home/gallery";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Gallery />
     <Footer />
    </>
  );
}
