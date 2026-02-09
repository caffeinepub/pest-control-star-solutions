import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us - Pest Control Star Solutions';
  }, []);

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-brand-yellow md:text-5xl">
          About Pest Control Star Solutions
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
          <p>
            Pest Control Star Solutions is one of the leading pest management companies in Mumbai and Pune. Our experienced technicians are equipped with the expertise and advanced solutions needed to protect residential and commercial properties from all types of pest infestations.
          </p>
          
          <p>
            With over 7 years of industry experience, we have consistently focused on delivering high-quality services by staying relevant, efficient, and passionate about what we do. What began as a small venture has steadily grown into a trusted name in pest management.
          </p>
          
          <p>
            We are deeply committed to service excellence. Our strong record of innovation is backed by a team of dedicated technicians who are trained to the highest professional standards, ensuring safe, effective, and reliable pest control solutions for our customers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border/40 bg-card p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-brand-orange">7+</div>
            <div className="text-sm text-muted-foreground">Years of Experience</div>
          </div>
          <div className="rounded-lg border border-border/40 bg-card p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-brand-orange">24/7</div>
            <div className="text-sm text-muted-foreground">Service Availability</div>
          </div>
          <div className="rounded-lg border border-border/40 bg-card p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-brand-orange">100%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}
