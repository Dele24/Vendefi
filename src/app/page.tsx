import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Process from "@/components/Process";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 flex flex-col">
        <Hero />
        <SelectedWork />
        <TrustStrip />
        <Services />
        <Technologies />
        <Process />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
