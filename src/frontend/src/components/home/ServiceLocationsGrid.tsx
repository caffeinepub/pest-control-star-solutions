import { Home, Building2, Building, Users, Car, Trees } from 'lucide-react';

const locations = [
  {
    id: 'homes',
    name: 'Homes',
    icon: Home,
    image: '/assets/generated/location-homes.dim_256x256.png',
  },
  {
    id: 'offices',
    name: 'Offices',
    icon: Building2,
    image: '/assets/generated/location-offices.dim_256x256.png',
  },
  {
    id: 'corporate',
    name: 'Corporate Buildings',
    icon: Building,
    image: '/assets/generated/location-corporate-buildings.dim_256x256.png',
  },
  {
    id: 'societies',
    name: 'Societies',
    icon: Users,
    image: '/assets/generated/location-societies.dim_256x256.png',
  },
  {
    id: 'vehicles',
    name: 'Vehicles',
    icon: Car,
    image: '/assets/generated/location-vehicles.dim_256x256.png',
  },
  {
    id: 'gardens',
    name: 'Garden Areas',
    icon: Trees,
    image: '/assets/generated/location-garden-areas.dim_256x256.png',
  },
];

export default function ServiceLocationsGrid() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-brand-yellow md:text-4xl">
            Where We Serve
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive pest control services for all types of properties
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => {
            const Icon = location.icon;
            return (
              <div
                key={location.id}
                className="group relative overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 to-transparent">
                  <div className="text-center text-white">
                    <Icon className="mx-auto mb-2 h-8 w-8" />
                    <h3 className="text-lg font-semibold">{location.name}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
