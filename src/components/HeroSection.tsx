import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-chemistry-professional.jpg";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative py-24 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0, 40, 80, 0.75), rgba(0, 60, 100, 0.85)), url(${heroImage})` }}
    >
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg tracking-tight">
          Professional Chemistry Tutoring
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto drop-shadow-md font-light">
          Expert instruction tailored to your learning needs. Achieve academic excellence through proven teaching methods.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" onClick={scrollToContact} className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto">
            Get Started
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToContact} className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 h-auto">
            Contact Me
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};
