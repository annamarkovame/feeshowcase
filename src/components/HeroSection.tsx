import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const HeroSection = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:natalydomainbroker@gmail.com?subject=Request to Acquire Fee.io&body=Hi, I'm interested in acquiring Fee.io for $500,000. Please provide more details about the acquisition process and next steps.";
  };

  return (
    <section className="section-hero flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      
      {/* Floating elements for visual depth - hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-premium rounded-full animate-pulse opacity-60" />
      <div className="hidden sm:block absolute top-1/3 right-1/3 w-1 h-1 bg-premium rounded-full animate-pulse opacity-40 animation-delay-1000" />
      <div className="hidden sm:block absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-premium rounded-full animate-pulse opacity-50 animation-delay-2000" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Main headline */}
          <div className="animate-fade-up">
            <h1 className="text-display-xl mb-4 sm:mb-6">
              Fee.io
            </h1>
            <p className="text-body-xl text-muted-foreground max-w-4xl mx-auto leading-tight px-4">
              <em>The brand behind the next zero-fee chain.</em>
            </p>
          </div>

          {/* Price and CTA */}
          <div className="animate-fade-up-delay space-y-4 sm:space-y-6">
            <div className="text-center">
              <div className="text-display-md text-success font-bold mb-2">
                $500,000
              </div>
              <p className="text-base sm:text-lg text-muted-foreground italic">
                Inquire to Acquire
              </p>
            </div>
            
            <Button 
              onClick={handleContactClick}
              className="btn-premium shadow-premium hover:shadow-glow transition-all duration-500 w-full sm:w-auto"
            >
              <Mail className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Request to Acquire Fee.io
            </Button>
          </div>

          {/* Tagline */}
          <div className="animate-slide-up mt-8 sm:mt-12">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground px-4">
              "Own the domain that defines the fee layer of Web3."
            </p>
          </div>

          {/* Supporting text */}
          <div className="animate-slide-up mt-12 sm:mt-16 max-w-4xl mx-auto px-4">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-card-premium border border-border/50">
              <p className="text-body-lg text-foreground mb-6 font-medium">
                Fee.io is a category-defining domain for:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-base sm:text-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                  <span>Zero-fee rollups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                  <span>Validator infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                  <span>Smart wallets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                  <span>Fee aggregators & L2 toolkits</span>
                </div>
              </div>
              
              <p className="text-body-lg text-foreground mt-6 sm:mt-8 font-semibold">
                One word. Three letters. The most important economic layer in crypto: <span className="text-premium font-bold">fees</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
