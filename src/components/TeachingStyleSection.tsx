import { BookOpen, Target, Users, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teachingApproaches = [
  {
    icon: BookOpen,
    title: "Personalized Learning",
    description: "[Describe how you tailor lessons to each student's learning style and pace]",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "[Explain how you help students set and achieve specific academic goals]",
  },
  {
    icon: Users,
    title: "Interactive Sessions",
    description: "[Detail your approach to making lessons engaging and interactive]",
  },
  {
    icon: Lightbulb,
    title: "Conceptual Understanding",
    description: "[Share how you focus on deep understanding rather than memorization]",
  },
];

export const TeachingStyleSection = () => {
  return (
    <section id="teaching-style" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Teaching Style
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            [Add a concise overview of your teaching philosophy and methodology - what sets your approach apart]
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {teachingApproaches.map((approach, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-medium)] bg-card"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <approach.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {approach.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
