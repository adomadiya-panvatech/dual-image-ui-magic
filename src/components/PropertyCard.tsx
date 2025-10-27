import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PropertyCardProps {
  title: string;
  description: string;
  image: string;
  assetType: string;
  fundingBadge: string;
  additionalBadge?: string;
  fundingStatus: string;
  fundingPercentage: number;
  fundingEndDate: string;
  borrower: string;
  borrowerLink?: string;
  manager: string;
  managerLink?: string;
  minimumOrder: string;
  couponRate: string;
  investmentTerm: string;
}

const PropertyCard = ({
  title,
  description,
  image,
  assetType,
  fundingBadge,
  additionalBadge,
  fundingStatus,
  fundingPercentage,
  fundingEndDate,
  borrower,
  borrowerLink,
  manager,
  managerLink,
  minimumOrder,
  couponRate,
  investmentTerm,
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-[hsl(237,84%,64%)] text-white border-0 px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-lg">
            {fundingBadge}
          </Badge>
          {additionalBadge && (
            <Badge className="bg-[hsl(200,100%,60%)] text-white border-0 px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-lg">
              {additionalBadge}
            </Badge>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Asset Type */}
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">
          {assetType}
        </p>

        {/* Title Section */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Progress Bar Section */}
        <div className="mb-6 pb-6 border-b border-border">
          <Progress value={fundingPercentage} className="h-2 mb-3" />
          <div className="flex justify-between items-center text-sm">
            <span className="font-bold text-primary">{fundingStatus}</span>
            <span className="text-muted-foreground">
              FUNDING ENDS {fundingEndDate}
            </span>
          </div>
        </div>

        {/* Details List */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
              Borrower
            </span>
            {borrowerLink ? (
              <a
                href={borrowerLink}
                className="text-sm font-semibold text-[hsl(237,84%,64%)] hover:underline"
              >
                {borrower}
              </a>
            ) : (
              <span className="text-sm font-semibold text-foreground">
                {borrower}
              </span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
              Manager
            </span>
            {managerLink ? (
              <a
                href={managerLink}
                className="text-sm font-semibold text-[hsl(237,84%,64%)] hover:underline"
              >
                {manager}
              </a>
            ) : (
              <span className="text-sm font-semibold text-foreground">
                {manager}
              </span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
              Minimum Order
            </span>
            <span className="text-sm font-semibold text-foreground">
              {minimumOrder}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
              Coupon Rate
            </span>
            <span className="text-sm font-semibold text-foreground">
              {couponRate}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
              Investment Term
            </span>
            <span className="text-sm font-semibold text-foreground">
              {investmentTerm}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <Button
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-base transition-all duration-300"
          size="lg"
        >
          View Offer
        </Button>
      </div>
    </Card>
  );
};

export default PropertyCard;
