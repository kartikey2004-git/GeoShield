"use client";
import GridSection from "@/components/grid-section";
import Hero from "@/components/hero-section";
import SeeInAction from "@/components/see-in-action";
import Testimonials from "@/components/testimonials";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <SeeInAction />
      <GridSection />
      <Testimonials />
    </div>
  );
}
