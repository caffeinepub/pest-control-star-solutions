import { Link } from '@tanstack/react-router';
import { services } from '@/config/services';
import ServiceCard from '@/components/services/ServiceCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FeaturedServices() {
  const featuredServices = services.slice(0, 3);

  return (
    <section className="container py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-brand-yellow md:text-4xl">
          Our Featured Services
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Professional pest control solutions tailored to your needs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link to="/services">
          <Button size="lg" variant="outline">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
