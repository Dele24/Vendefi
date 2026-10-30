import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessProblems from "@/components/BusinessProblems";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
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
        <BusinessProblems />
        <SelectedWork />
        <Services />
        <Process />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
