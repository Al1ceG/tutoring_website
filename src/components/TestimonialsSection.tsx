import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our daughter disengaged from GCSE science subjects during school, struggled to keep up & her mock exam grades were disappointing 4’s. She began 1:1 tutoring sessions with Stuart and instantly showed real enthusiasm & a renewed understanding of the sciences. Stuart's professionalism, patience, expertise, support and dedication really is exceptional and it is down to his considered & thoughtful tutoring that our daughter started to believe in her abilities. He made learning fun, went at her pace, motivated and inspired her to put the work in & be determined to do well. She walked away with 9\’s in her final exams. 1:1 tutoring with Stuart was without a doubt a game changer and a real asset during exams. He comes highly recommended",
    author: "Mother, Hove",
    role: "Brighton College GCSE Pupil",
  },
  {
    quote: "Stuart was the most fantastic & brilliant chemistry tutor for my son. Stuart was enthusiastic, interested and absolutely got him in the best place before his A Level.  He instilled confidence and an even deeper love of the subject for him.  Z was totally comfortable during the in person sessions and was always encouraged to ask or speak up whenever he didnt understand anything big or small. It was a relaxed & productive environment. Online questions were set as homework with Z encouraged to msg with any questions between sessions. We were thrilled with his final A Level result it was worth every penny.  Would HIGHLY recommend . Thank you Stuart.",
    author: "Mother, Hove",
    role: "Brighton College A Level Pupil",
  },
  {
    quote: "My daughter lacked confidence and enthusiasm for GCSE Combined Science, and we were really worried about how she would cope with the exams. Stuart was absolutely brilliant at igniting her interest and helping her truly understand the subject. He was incredibly generous with his knowledge and his time, always going the extra mile to make sure she felt supported. She went from really not enjoying science—and failing her mocks—to feeling positive, engaged, and genuinely excited about the subject. Thanks to Stuart’s guidance, she passed her GCSEs with flying colours. Stuart is one of the best tutors you could hope for. We highly recommend him",
    author: "Mother, Brighton",
    role: "Roedean GCSE Pupil",
  },
  {
    quote: "[Add a fourth testimonial that showcases your dedication, patience, or unique approach to teaching chemistry.]",
    author: "[Student/Parent Name]",
    role: "[Grade Level or Exam Type]",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Testimonials
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
