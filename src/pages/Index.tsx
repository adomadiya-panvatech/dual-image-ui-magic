import PropertyCard from "@/components/PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Index = () => {
  const properties = [
    {
      title: "PBN Global Asset Based Medium Ter...",
      description:
        "Diversified algorithmic exposure to a revolving portfolio of eligible notes offered on Percent",
      image: property1,
      assetType: "FUND",
      fundingBadge: "FUNDING",
      additionalBadge: "OCTOBER'S PEN!",
      fundingStatus: "93% FUNDED",
      fundingPercentage: 93,
      fundingEndDate: "OCT 27",
      borrower: "Percent Advisors",
      manager: "Percent",
      managerLink: "#",
      minimumOrder: "$5,000",
      couponRate: "Variable",
      investmentTerm: "36 months",
    },
    {
      title: "LIL SMB Financing Sr. 2025-3",
      description:
        "Refinancing offering exposure to a senior asset-based financing to Lily Advance",
      image: property2,
      assetType: "ASSET BASED",
      fundingBadge: "FUNDING",
      fundingStatus: "1.17x OVERSUBSCRIBED",
      fundingPercentage: 117,
      fundingEndDate: "OCT 27",
      borrower: "Lily Advance",
      borrowerLink: "#",
      manager: "Percent",
      managerLink: "#",
      minimumOrder: "$5,000",
      couponRate: "[15.00 - 16.00]%",
      investmentTerm: "13 months",
    },
    {
      title: "FMX Invoice Factoring Sr. 2025-1",
      description:
        "Inaugural offering of a senior asset-based financing to Fondimex",
      image: property3,
      assetType: "ASSET BASED",
      fundingBadge: "FUNDING",
      additionalBadge: "$500 MINIMUM!",
      fundingStatus: "1.31x OVERSUBSCRIBED",
      fundingPercentage: 131,
      fundingEndDate: "OCT 27",
      borrower: "Fondimex",
      borrowerLink: "#",
      manager: "Percent",
      managerLink: "#",
      minimumOrder: "$500",
      couponRate: "[15.00 - 16.50]%",
      investmentTerm: "9 months",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Investment Opportunities
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of premium real estate investment properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
