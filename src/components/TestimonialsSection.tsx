import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "[Add testimonial from a student or parent here. Include specific results or improvements they experienced.]",
    author: "[Student/Parent Name]",
    role: "[Grade Level or Exam Type]",
  },
  {
    quote: "[Add another testimonial highlighting a different aspect of your tutoring, such as teaching style or subject mastery.]",
    author: "[Student/Parent Name]",
    role: "[Grade Level or Exam Type]",
  },
  {
    quote: "[Add a third testimonial focusing on outcomes, such as improved grades, exam success, or increased confidence.]",
    author: "[Student/Parent Name]",
    role: "[Grade Level or Exam Type]",
  },
  {
    quote: "[Add a fourth testimonial that showcases your dedication, patience, or unique approach to teaching chemistry.]",
    author: "[Student/Parent Name]",
    role: "[Grade Level or Exam Type]",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Student Success Stories
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Hear from students and parents about their experience and academic outcomes
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-card border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-medium)] relative overflow-hidden"
              >
                <CardContent className="pt-6">
                  <Quote className="w-10 h-10 text-accent/20 absolute top-4 right-4" />
                  <div className="relative z-10">
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t-2 border-border pt-4">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
