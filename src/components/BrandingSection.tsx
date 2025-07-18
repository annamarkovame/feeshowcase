import { Zap, Shield, Globe } from "lucide-react";

const BrandingSection = () => {
  return (
    <section className="section-premium px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-display-md mb-4 sm:mb-6 animate-fade-up">
            A Strategic Asset
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-up-delay mb-6 sm:mb-8 px-4">
            This is not a speculative domain — it's a strategic asset for the future of Web3 infrastructure.
          </p>
          <div className="animate-fade-up-delay">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground px-4">
              "Your chain isn't serious until it owns the fee layer."
            </p>
          </div>
        </div>

        {/* Mock branding visual */}
        <div className="mb-12 sm:mb-16 animate-fade-up">
          <div className="bg-primary rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Background pattern - simplified for mobile */}
            <div className="absolute inset-0 opacity-10">
              <div className="hidden sm:block absolute top-8 left-8 w-24 sm:w-32 h-24 sm:h-32 border border-primary-foreground/20 rounded-full" />
              <div className="hidden sm:block absolute bottom-8 right-8 w-16 sm:w-24 h-16 sm:h-24 border border-primary-foreground/20 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 border border-primary-foreground/10 rounded-full" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-2 sm:mb-4 animate-glow">
                Fee.io
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 font-medium">
                The Future of Gasless Crypto
              </p>
            </div>
          </div>
        </div>

        {/* Key value propositions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center animate-fade-up px-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-premium/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-premium" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Lightning Fast</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              Perfect for zero-fee rollups and instant transaction protocols
            </p>
          </div>

          <div className="text-center animate-fade-up px-4" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-premium/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-premium" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Trusted Authority</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              Build instant credibility with the most recognizable fee-related domain
            </p>
          </div>

          <div className="text-center animate-fade-up px-4 sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-premium/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-premium" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Global Recognition</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              One word that every crypto user understands across all markets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;