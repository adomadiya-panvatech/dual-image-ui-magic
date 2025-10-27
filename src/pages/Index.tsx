import PropertyCard from "@/components/PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Index = () => {
  const properties = [
    {
      title: "Energy Campuses, AI D...",
      subtitle: "AGI Avant Group, 15000 AVIATION BLVD.",
      image: property1,
      minAmount: "$2 K",
      fundingEndDate: "02/01/2027",
      offeringSize: "$118 M",
      status: "Active",
    },
    {
      title: "Westing House",
      subtitle: "PTES Solution",
      image: property2,
      minAmount: "$10 K",
      fundingEndDate: "02/01/2027",
      offeringSize: "$118 M",
      status: "Active",
    },
    {
      title: "Star Avenue Serenity",
      subtitle: "Star Avenue Dream Home",
      image: property3,
      minAmount: "$100.00",
      fundingEndDate: "11/30/2026",
      offeringSize: "$10 K",
      status: "Active",
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
