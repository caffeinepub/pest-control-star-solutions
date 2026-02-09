import { teamMembers } from '@/config/team';

export default function OurTeamSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-brand-yellow md:text-4xl">
          Our Team
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Meet our experienced professionals dedicated to keeping your property pest-free
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:shadow-lg"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="mb-1 text-xl font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
