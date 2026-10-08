
import Hero from "@/components/home/Hero";
import CompanyIntro from "@/components/home/CompanyIntro";
import DarkServices from "@/components/home/DarkServices";
import TransportShowcase from "@/components/home/TransportShowcase";
import ContainerFeatures from "@/components/home/ContainerFeatures";
import TeamSection from "@/components/home/TeamSection";
import FreightGallery from "@/components/home/FreightGallery";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ArticlesSection from "@/components/home/ArticlesSection";

export const metadata = {
  title: "Home | Northline Freight Solutions",
  description:
    "Freight dispatch coordination and transportation support.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <CompanyIntro />
      <DarkServices />
      <TransportShowcase />
      <ContainerFeatures />
      <TeamSection />
      <FreightGallery />
      <TestimonialsSection />
      <ArticlesSection />
    </main>
  );
}
