import { Upload, Frame, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക",
      description: "നിങ്ങളുടെ ഉപകരണത്തിൽ നിന്ന് മികച്ച പ്രൊഫൈൽ ചിത്രം തിരഞ്ഞെടുക്കുക",
    },
    {
      icon: Frame,
      title: "ഫ്രെയിം ചേർക്കുക",
      description: "നിങ്ങളുടെ ഫോട്ടോയിൽ ഞങ്ങൾ യാന്ത്രികമായി പ്രചാരണ ഫ്രെയിം ചേർക്കും",
    },
    {
      icon: Share2,
      title: "പങ്കിടുകയും പിന്തുണയ്ക്കുകയും ചെയ്യുക",
      description: "ഡൗൺലോഡ് ചെയ്ത് വാട്ട്‌സ്ആപ്പിൽ പങ്കിടുക, അല്ലെങ്കിൽ പ്രൊഫൈൽ ചിത്രമായി ഉപയോഗിക്കുക",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">എങ്ങനെ പ്രവർത്തിക്കുന്നു</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            മൂന്ന് ലളിതമായ ഘട്ടങ്ങളിൽ ആയിരക്കണക്കിന് പിന്തുണക്കാരോട് ചേരുക
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-[var(--shadow-card)] transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-xl font-bold mb-2 text-accent">
                  ഘട്ടം {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
