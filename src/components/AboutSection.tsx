import headShot from "@/assets/headShot.jpeg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[var(--shadow-medium)] border-4 border-primary/20">
                  <img 
                    src={headShot} 
                    alt="Your Tutor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-full w-24 h-24 flex items-center justify-center shadow-[var(--shadow-medium)] border-4 border-background">
                  <span className="text-3xl font-bold">[Years]</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Add your educational background, credentials, and professional experience here. Include degrees, certifications, and years of teaching/tutoring experience in chemistry.]
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Describe your expertise and teaching philosophy. Explain your approach to helping students understand complex chemistry concepts and achieve measurable academic success.]
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Highlight any specializations, academic achievements, or professional recognition that demonstrates your commitment to excellence in chemistry education.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
