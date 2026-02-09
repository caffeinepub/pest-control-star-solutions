import { useEffect } from 'react';
import { services } from '@/config/services';
import ServiceCard from '@/components/services/ServiceCard';

export default function ServicesListPage() {
  useEffect(() => {
    document.title = 'Our Services - Pest Control Star Solutions';
  }, []);

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-brand-yellow md:text-5xl">
          Our Services
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Comprehensive pest control solutions tailored to protect your home, office, and commercial spaces from all types of pest infestations.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
