import { MapPin, Phone, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';

interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  phoneFormatted: string;
  hours: string;
  mapQuery: string;
}

interface BranchContactCardProps {
  branch: Branch;
}

export default function BranchContactCard({ branch }: BranchContactCardProps) {
  const whatsappUrl = `https://wa.me/${branch.phoneFormatted.replace(/\+/g, '')}`;
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${branch.mapQuery}`;

  return (
    <div className="overflow-hidden rounded-lg border border-border/40 bg-card">
      <div className="aspect-video overflow-hidden">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${branch.name} location map`}
        />
      </div>

      <div className="p-6">
        <h2 className="mb-4 text-2xl font-bold text-brand-yellow">
          {branch.name} Branch
        </h2>

        <div className="mb-6 space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-brand-orange" />
            <p className="text-sm text-muted-foreground">{branch.address}</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 shrink-0 text-brand-orange" />
            <a
              href={`tel:${branch.phoneFormatted}`}
              className="text-sm text-muted-foreground hover:text-brand-orange transition-colors"
            >
              {branch.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 shrink-0 text-brand-orange" />
            <p className="text-sm text-muted-foreground">{branch.hours}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${branch.phoneFormatted}`} className="flex-1">
            <Button className="w-full">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" className="w-full">
              <SiWhatsapp className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
