import { GraduationCap, Award, BookCheck, Trophy } from "lucide-react";

const experience = [
  {
    icon: GraduationCap,
    title: "Classroom Teaching",
    items: [
      "Over a decade of teaching experience at Hurstpierpoint College, including two years as Head of Chemistry.",
      "Redesigning the Chemistry curriculum, improving the school's value add to the top 3% of the country."
    ],
  },
  {
    icon: BookCheck,
    title: "Private Tutoring",
    items: [
      "Eight years of private tutoring experience across GCSE and A Level.",
      "Experience in a wide range of exam boards and syllabuses.",
      "Both one-to-one and group tutoring"
    ],
  },
  // {
  //   icon: Award,
  //   title: "Certifications",
  //   items: [
  //     "PGCE Degree, Sussex University",
  //     "MSc Artificial Intelligence, Sussex University",
  //     "BSc Economics, Bristol University"
  //   ],
  // },
  // {
  //   icon: Trophy,
  //   title: "TutorMyself",
  //   items: [
  //     "Creator of TutorMyself Chemistry, a website to help students learn for their Chemistry GCSE",
  //     "Attracts over 1000 users a month",
  //     "Fully equiped with quizzes, flashcards, and past paper questions",
  //   ],
  // },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Experience
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((section, index) => (
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
