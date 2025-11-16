import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "stuartgrahamtutoring@gmail.com",
    link: "mailto:[stuartmckenziegraham@gmail.com]",
  },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: "---",
  //   link: null,
  // },
  {
    icon: MapPin,
    label: "Location",
    value: "Brighton & Hove",
    link: null,
  },
  // {
  //   icon: Clock,
  //   label: "Availability",
  //   value: "Weekdays and weekends",
  //   link: null,
  // },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Get In Touch
          </h2>
          
          <Card className="shadow-[var(--shadow-medium)] border-2 border-primary/10">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactDetails.map((detail, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <detail.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground mb-1">{detail.label}</p>
                      {detail.link ? (
                        <a 
                          href={detail.link} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
