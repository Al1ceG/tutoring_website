import { GraduationCap, Award, BookCheck, Trophy } from "lucide-react";

const qualifications = [
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "[Degree, Institution, Year]",
      "[Additional degree or certification]",
      "[Any specialized chemistry qualifications]",
    ],
  },
  {
    icon: Award,
    title: "Certifications",
    items: [
      "[Teaching certification or license]",
      "[Subject-specific certifications]",
      "[Professional development courses]",
    ],
  },
  {
    icon: BookCheck,
    title: "Experience",
    items: [
      "[Years of tutoring experience]",
      "[Types of students taught (age groups, levels)]",
      "[Success rate or notable achievements]",
    ],
  },
  {
    icon: Trophy,
    title: "Specializations",
    items: [
      "[Specific chemistry topics or exam prep]",
      "[Advanced placement or honors courses]",
      "[Laboratory techniques or practical skills]",
    ],
  },
];

export const QualificationsSection = () => {
  return (
    <section id="qualifications" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Qualifications & Experience
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {qualifications.map((section, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 border-2 border-transparent hover:border-primary/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <section.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
