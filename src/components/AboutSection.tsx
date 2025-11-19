import headShot from "@/assets/headShot.jpeg";
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-120 h-120 md:w-120 md:h-120 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src={headShot}
                    alt="Your Tutor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-muted-foreground leading-loose text-center">
              An experienced Chemistry tutor focused on helping students reach their full potential 
              by building confidence and understanding. 
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <p className="text-lg text-muted-foreground leading-loose text-center">
              I care about each pupil as an individual, 
              creating a personalised learning plan to find the style of learning and studying that works best for them.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
