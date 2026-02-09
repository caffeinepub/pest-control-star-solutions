import { useEffect } from 'react';
import { siteConfig } from '@/config/site';
import BranchContactCard from '@/components/contact/BranchContactCard';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us - Pest Control Star Solutions';
  }, []);

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-brand-yellow md:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Get in touch with us for professional pest control services. We're available 24/7 to assist you.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {siteConfig.branches.map((branch) => (
          <BranchContactCard key={branch.id} branch={branch} />
        ))}
      </div>
    </div>
  );
}
