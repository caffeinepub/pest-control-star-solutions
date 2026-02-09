import { Award, Users, Clock, CheckCircle2, ThumbsUp, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '7+ Years of Experience',
    description: 'Proven track record in pest management across Mumbai and Pune',
  },
  {
    icon: Users,
    title: 'Trained Professionals',
    description: 'Certified technicians with expertise in all pest control methods',
  },
  {
    icon: Clock,
    title: '24/7 Service Availability',
    description: 'Round-the-clock emergency services for urgent pest problems',
  },
  {
    icon: CheckCircle2,
    title: 'Reliable & Effective Solutions',
    description: 'Advanced techniques and products for guaranteed results',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    description: 'Dedicated to exceeding expectations with every service',
  },
  {
    icon: Shield,
    title: 'Safe & Eco-Friendly',
    description: 'Environmentally responsible methods that protect your family',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <img
            src="/assets/generated/why-choose-us-support.dim_1200x800.png"
            alt="Why choose Pest Control Star Solutions"
            className="rounded-lg shadow-xl"
            loading="lazy"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="mb-6 text-3xl font-bold text-brand-yellow md:text-4xl">
            Why Choose Pest Control Star Solutions?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            We are committed to providing the highest quality pest control services with a focus on customer satisfaction, safety, and effectiveness.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange/10">
                    <Icon className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
