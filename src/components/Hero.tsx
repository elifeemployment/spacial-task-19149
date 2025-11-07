import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-campaign.png";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-95" />
      
      {/* Hero content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              പ്രചാരണത്തിൽ ചേരൂ
              <span className="block text-accent mt-2">നിങ്ങളുടെ പിന്തുണ കാണിക്കൂ</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto lg:mx-0">
              നിങ്ങളുടെ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക, ഞങ്ങളുടെ പ്രചാരണ ഫ്രെയിം ചേർക്കുക, ലോകവുമായി നിങ്ങളുടെ പിന്തുണ പങ്കിടുക.
              ഒരുമിച്ച് നമുക്ക് മാറ്റമുണ്ടാക്കാം!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="cta"
                onClick={onGetStarted}
                className="text-base"
              >
                ആരംഭിക്കുക
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="secondary"
                className="text-base bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
              >
                കൂടുതൽ അറിയുക
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start text-primary-foreground/80">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm">പിന്തുണക്കാർ</div>
              </div>
              <div className="h-12 w-px bg-primary-foreground/20" />
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm">ഫോട്ടോകൾ പങ്കിട്ടു</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Campaign community engagement" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
