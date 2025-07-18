import HeroSection from "@/components/HeroSection";
import ComparableSalesSection from "@/components/ComparableSalesSection";
import BrandingSection from "@/components/BrandingSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "Fee.io - Premium Crypto Domain for Sale | $500,000";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Fee.io - A premium .io domain perfect for crypto fee infrastructure, rollups, and Web3 projects. Strategic acquisition opportunity for $500,000.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ComparableSalesSection />
      <BrandingSection />
    </div>
  );
};

export default Index;
