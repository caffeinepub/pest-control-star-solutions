import { Leaf, Shield, Heart } from 'lucide-react';

export default function EcoFriendlySection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-brand-yellow md:text-4xl">
              Environment-Friendly Pest Control Services
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              At Pest Control Star Solutions, we prioritize the health and safety of your family, pets, and the environment. Our eco-friendly pest control methods combine effectiveness with environmental responsibility.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange/10">
                  <Leaf className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Safe Chemicals</h3>
                  <p className="text-muted-foreground">
                    We use EPA-approved, low-toxicity products that are highly effective against pests while being safe for humans and pets when applied correctly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange/10">
                  <Shield className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Eco-Friendly Methods</h3>
                  <p className="text-muted-foreground">
                    Our integrated pest management approach minimizes chemical usage by combining physical barriers, biological controls, and targeted treatments only where necessary.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange/10">
                  <Heart className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Family & Pet Safe</h3>
                  <p className="text-muted-foreground">
                    All our treatments are designed with your loved ones in mind. We provide clear instructions and safety guidelines to ensure complete peace of mind after treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/assets/generated/eco-friendly-support.dim_1200x800.png"
              alt="Eco-friendly pest control"
              className="rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
