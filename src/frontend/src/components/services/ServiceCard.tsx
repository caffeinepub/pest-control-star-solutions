import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Service } from '@/config/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-foreground">
          {service.name}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
          {service.shortDescription}
        </p>
        <Link to="/services/$slug" params={{ slug: service.slug }}>
          <Button variant="outline" className="w-full group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
