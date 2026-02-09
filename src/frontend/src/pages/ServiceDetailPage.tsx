import { useEffect } from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { getServiceBySlug } from '@/config/services';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowLeft, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ServiceDetailPage() {
  const { slug } = useParams({ from: '/services/$slug' });
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.name} - Pest Control Star Solutions`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="container py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold">Service Not Found</h1>
        <p className="mb-8 text-muted-foreground">
          The service you are looking for does not exist.
        </p>
        <Link to="/services">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16">
      <Link to="/services" className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-brand-orange transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Services
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <img
            src={service.image}
            alt={service.name}
            className="w-full rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </div>

        <div>
          <h1 className="mb-4 text-4xl font-bold text-brand-yellow md:text-5xl">
            {service.name}
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            {service.description}
          </p>

          <div className="mb-8">
            <a href={`tel:${siteConfig.branches[0].phoneFormatted}`}>
              <Button size="lg" className="w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Call Now for Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold text-brand-yellow">Benefits</h2>
          <ul className="space-y-4">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-orange" />
                <span className="text-foreground/90">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-3xl font-bold text-brand-yellow">Our Process</h2>
          <ol className="space-y-4">
            {service.process.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                  {index + 1}
                </div>
                <span className="pt-1 text-foreground/90">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-16 rounded-lg border border-border/40 bg-muted/30 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold text-brand-yellow">
          Ready to Get Started?
        </h2>
        <p className="mb-6 text-muted-foreground">
          Contact us today for a free consultation and quote. Our team is available 24/7 to assist you.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a href={`tel:${siteConfig.branches[0].phoneFormatted}`}>
            <Button size="lg" className="w-full sm:w-auto">
              <Phone className="mr-2 h-5 w-5" />
              Call Mumbai: {siteConfig.branches[0].phone}
            </Button>
          </a>
          <a href={`tel:${siteConfig.branches[1].phoneFormatted}`}>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Phone className="mr-2 h-5 w-5" />
              Call Pune: {siteConfig.branches[1].phone}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
