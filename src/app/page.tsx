import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import ProblemAndDistinction from "@/components/ProblemAndDistinction";
import WhatWeBuild from "@/components/WhatWeBuild";
import BornInsideRouze from "@/components/BornInsideRouze";
import EngagementModel from "@/components/EngagementModel";
import Pricing from "@/components/Pricing";
import TrustOwnership from "@/components/TrustOwnership";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Why />
        <ProblemAndDistinction />
        <WhatWeBuild />
        <BornInsideRouze />
        <EngagementModel />
        <Pricing />
        <TrustOwnership />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
