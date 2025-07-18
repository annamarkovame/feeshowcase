import { TrendingUp, DollarSign } from "lucide-react";

const ComparableSalesSection = () => {
  const sales = [
    {
      domain: "Mint.io",
      price: "$230,000",
      year: "2021",
      description: "NFT infra",
      highlight: false
    },
    {
      domain: "Wallet.io",
      price: "~$1,000,000",
      year: "",
      description: "Web3 wallet brand",
      highlight: false
    },
    {
      domain: "Token.com",
      price: "$500,000+",
      year: "",
      description: "",
      highlight: false
    },
    {
      domain: "NFTs.com",
      price: "$15,000,000",
      year: "",
      description: "",
      highlight: true
    },
    {
      domain: "Crypto.com",
      price: "$12,000,000",
      year: "",
      description: "",
      highlight: true
    }
  ];

  return (
    <section className="section-premium bg-gradient-subtle px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-display-md mb-4 sm:mb-6 animate-fade-up">
            Comparable Sales
          </h2>
          <p className="text-body-lg text-muted-foreground animate-fade-up-delay px-4">
            Premium crypto domains that have set the market standard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {sales.map((sale, index) => (
            <div 
              key={sale.domain}
              className={`
                bg-card rounded-xl p-4 sm:p-6 border border-border/50 transition-all duration-300
                hover:shadow-card-premium active:scale-95 sm:hover:scale-105
                ${sale.highlight ? 'ring-2 ring-premium/20 bg-premium/5' : ''}
                animate-fade-up
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{sale.domain}</h3>
                {sale.highlight && (
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-premium flex-shrink-0" />
                )}
              </div>
              
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0" />
                <span className="text-lg sm:text-xl font-semibold text-success">{sale.price}</span>
                {sale.year && (
                  <span className="text-xs sm:text-sm text-muted-foreground">({sale.year})</span>
                )}
              </div>
              
              {sale.description && (
                <p className="text-xs sm:text-sm text-muted-foreground">{sale.description}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card-premium border border-border/50 animate-fade-up">
            <p className="text-body-lg text-foreground font-semibold italic">
              Fee.io is next — clean, powerful, and designed to own the conversation around crypto fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparableSalesSection;