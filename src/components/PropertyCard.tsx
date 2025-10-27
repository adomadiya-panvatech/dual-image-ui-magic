import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface PropertyCardProps {
  title: string;
  subtitle: string;
  image: string;
  minAmount: string;
  fundingEndDate: string;
  offeringSize: string;
  status: string;
}

const PropertyCard = ({
  title,
  subtitle,
  image,
  minAmount,
  fundingEndDate,
  offeringSize,
  status,
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
        <div className="absolute top-4 right-4">
          <Badge className="bg-success text-success-foreground flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium shadow-lg">
            <CheckCircle2 className="w-4 h-4" />
            {status}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5">
              Min Amount
            </p>
            <p className="text-2xl font-bold text-foreground">{minAmount}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5">
              Offering Size
            </p>
            <p className="text-2xl font-bold text-success">{offeringSize}</p>
          </div>
        </div>

        <div className="mb-6 pb-6 border-b border-border">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5">
            Funding end date
          </p>
          <p className="text-base font-semibold text-foreground">
            {fundingEndDate}
          </p>
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
