import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "[your.email@example.com]",
    link: "mailto:[your.email@example.com]",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "[(XXX) XXX-XXXX]",
    link: "tel:[+1XXXXXXXXXX]",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "[City, State/Region]",
    link: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "[Days/Times Available]",
    link: null,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Schedule a consultation to discuss your academic goals and learning needs
          </p>
          
          <Card className="shadow-[var(--shadow-medium)] border-2 border-primary/10">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription className="text-base">
                [Add your preferred method of contact and typical response time]
              </CardDescription>
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
              
              <div className="text-center pt-6 border-t-2 border-border">
                <p className="text-muted-foreground mb-6">
                  [Add information about session formats (in-person/online), rates, or scheduling policies]
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary-dark"
                  onClick={() => window.location.href = 'mailto:[your.email@example.com]'}
                >
                  Schedule a Session
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
