import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import heroImage from "@/assets/hero-chemistry-professional.jpg";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -112; // height of navbar (h-28 = 28 * 4px = 112px)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cover bg-center bg-no-repeat
      `}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 40, 80, 0.75), rgba(0, 60, 100, 0.85)), url(${heroImage})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold text-white transition-colors"
          >
            Stuart Graham Tutoring
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-primary-light transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection("#contact")}>
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/30 bg-black/30 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-primary-light transition-colors font-medium text-left px-4 py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full" onClick={() => scrollToSection("#contact")}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
