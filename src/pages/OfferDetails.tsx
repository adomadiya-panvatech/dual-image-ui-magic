import { useLocation, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";

const OfferDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state?.property;

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property not found</h2>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image and Details Card */}
      <div className="relative h-[500px] w-full">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Card */}
        <div className="absolute top-8 right-8 bg-white dark:bg-card rounded-lg shadow-2xl p-6 max-w-md">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Offer Name
              </p>
              <h2 className="text-xl font-bold text-foreground">{property.title}</h2>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Filling Type
              </p>
              <p className="text-sm font-semibold text-foreground">{property.assetType}</p>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Short Description
              </p>
              <p className="text-sm font-semibold text-foreground">{property.description}</p>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Offer Tag
              </p>
              <p className="text-sm font-semibold text-foreground">{property.assetType}</p>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Offering size
              </p>
              <p className="text-2xl font-bold text-[hsl(160,80%,45%)]">$1,100,000</p>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Offer Status
              </p>
              <Badge className="bg-[hsl(160,80%,45%)] text-white border-0">
                {property.fundingBadge}
              </Badge>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Button
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          size="sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      {/* Main Content */}
      <div className="container py-8 px-4 md:px-6 lg:px-8">
        {/* Property Details Section */}
        <div className="bg-card rounded-lg p-8 mb-8 shadow-sm border">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {property.title}
              </h1>
              <p className="text-muted-foreground">{property.description}</p>
            </div>
            <Badge className="bg-[hsl(237,84%,64%)] text-white border-0 ml-4">
              {property.fundingBadge}
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Borrower:
              </p>
              <p className="text-sm font-semibold text-[hsl(237,84%,64%)]">
                {property.borrower}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Financing Type:
              </p>
              <p className="text-sm font-semibold text-foreground">{property.assetType}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Manager:
              </p>
              <p className="text-sm font-semibold text-[hsl(237,84%,64%)]">
                {property.manager}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Close Date:
              </p>
              <p className="text-sm font-semibold text-foreground">
                October 27, 2025 6:00 AM
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Funding Ends:
              </p>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-foreground">
                  October 27, 2025 6:00 AM
                </p>
                <Badge className="bg-[hsl(200,100%,60%)] text-white border-0 text-xs">
                  6 hours left
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Minimum Investment
              </p>
              <p className="text-2xl font-bold text-foreground">{property.minimumOrder}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Coupon Rate
              </p>
              <p className="text-2xl font-bold text-foreground">{property.couponRate}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Investment Term
              </p>
              <p className="text-2xl font-bold text-foreground">{property.investmentTerm}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Matures on October 27, 2028
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Investment Objective
              </p>
              <p className="text-2xl font-bold text-foreground">$1,100,000</p>
              <Badge className="bg-[hsl(200,100%,60%)] text-white border-0 mt-2">
                {property.fundingPercentage}% FUNDED
              </Badge>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="w-full justify-start bg-muted/50 p-1 h-auto rounded-lg mb-8">
            <TabsTrigger
              value="details"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 font-semibold"
            >
              OFFER DETAILS
            </TabsTrigger>
            <TabsTrigger value="video" className="px-6 py-3 font-semibold">
              VIDEO
            </TabsTrigger>
            <TabsTrigger value="pitch" className="px-6 py-3 font-semibold">
              PITCH DECK
            </TabsTrigger>
            <TabsTrigger value="updates" className="px-6 py-3 font-semibold">
              UPDATES
            </TabsTrigger>
            <TabsTrigger value="qa" className="px-6 py-3 font-semibold">
              Q AND A
            </TabsTrigger>
            <TabsTrigger value="faqs" className="px-6 py-3 font-semibold">
              FAQs
            </TabsTrigger>
            <TabsTrigger value="contact" className="px-6 py-3 font-semibold">
              CONTACT US
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-8">
            {/* The Opportunity Section */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center text-foreground mb-6">
                The Opportunity
              </h2>
              <p className="text-foreground leading-relaxed">
                A $300 million Credit Revenue Bond secured by the City of Tempe to
                finance energy infrastructure projects like Tempe Gateway North
                Energy Campus. The city pledges to repay it using rental income from
                the Data Center ground lease. This is a long term opportunity with
                significant growth potential in a prime location.
              </p>
            </div>

            {/* Deal Summary Section */}
            <div className="bg-card rounded-lg p-8 border shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-foreground">Deal Summary</h2>
                <Button variant="link" className="text-primary">
                  Hide
                </Button>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                Please review the Confidential Private Placement Memorandum in
                conjunction with the Private Placement Memorandum Supplement for full
                offering disclosures including Risk Factors which can be found in the
                data room for this offering (see tab above).
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-card rounded-lg p-8 border shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    What is a Blended Note?
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    The Percent Blended Note provides investors diversified exposure
                    across Percent's existing platform deals. Instead of investing in a
                    single borrower's deal and building a portfolio of deals manually, a
                    single Percent Blended Note provides exposure to multiple underlying
                    deals through just one transaction. Investors will receive monthly
                    distributions consisting of the aggregate interest earned from
                    underlying deals net of the management fee and other expenses.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="video">
            <div className="bg-card rounded-lg p-12 border shadow-sm text-center">
              <p className="text-muted-foreground">Video content coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="pitch">
            <div className="bg-card rounded-lg p-12 border shadow-sm text-center">
              <p className="text-muted-foreground">Pitch deck coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="updates">
            <div className="bg-card rounded-lg p-12 border shadow-sm text-center">
              <p className="text-muted-foreground">Updates coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="qa">
            <div className="bg-card rounded-lg p-12 border shadow-sm text-center">
              <p className="text-muted-foreground">Q&A coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="faqs">
            <div className="bg-card rounded-lg p-12 border shadow-sm text-center">
              <p className="text-muted-foreground">FAQs coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div className="bg-card rounded-lg p-12 border shadow-sm text-center">
              <p className="text-muted-foreground">Contact information coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OfferDetails;
