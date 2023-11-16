"use client";
import Header from "./containers/header/Header";
import Hero from "./containers/hero/Hero";
import About from "./containers/aboutUs/About";
import Laurels from "./containers/laurels/Laurels";
import ChefWord from "./containers/chefWord/ChefWord";
import Gallery from "./containers/gallery/Gallery";
import FindUs from "./containers/findUs/FindUs";
import FooterSection from "./containers/footerSection/FooterSection";
import Special from "./containers/special/Special";
import LogoSection from "./containers/logoSection/LogoSection";
export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <About />
      <Special />
      <ChefWord />
      <LogoSection />
      <Laurels />
      <Gallery />
      <FindUs />
      <FooterSection />
    </main>
  );
}
