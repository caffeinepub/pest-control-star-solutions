export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  process: string[];
  image: string;
  detailImage?: string;
}

export const services: Service[] = [
  {
    id: 'bed-bugs',
    slug: 'bed-bugs-control',
    name: 'Bed Bugs Control',
    shortDescription: 'Effective bed bug elimination using advanced heat and chemical treatments for complete eradication.',
    description: 'Our comprehensive bed bug control service uses a combination of advanced heat treatment and targeted chemical applications to eliminate bed bugs at all life stages. We understand the distress bed bugs cause and provide thorough inspections, customized treatment plans, and follow-up services to ensure complete eradication. Our trained technicians use safe, EPA-approved products that are effective against bed bugs while being safe for your family and pets.',
    benefits: [
      'Complete elimination of bed bugs at all life stages',
      'Safe, non-toxic treatment options available',
      'Minimal disruption to your daily routine',
      'Follow-up inspections included',
      'Prevention tips and guidance provided',
      'Fast-acting treatments with long-lasting results',
    ],
    process: [
      'Thorough inspection of affected areas and identification of infestation level',
      'Customized treatment plan based on severity and location',
      'Pre-treatment preparation guidance for optimal results',
      'Application of heat treatment and/or targeted chemical solutions',
      'Post-treatment inspection and monitoring',
      'Follow-up visit to ensure complete eradication',
    ],
    image: '/assets/generated/service-bed-bugs.dim_1200x800.png',
  },
  {
    id: 'rat-guard',
    slug: 'rat-guard-installation',
    name: 'Rat Guard Installation',
    shortDescription: 'Professional rat guard installation to prevent rodent entry through pipes and drainage systems.',
    description: 'Protect your property from rodent intrusion with our professional rat guard installation service. We install high-quality stainless steel rat guards on all vulnerable entry points including drainage pipes, plumbing lines, and ventilation systems. Our rat guards are designed to allow proper water flow while completely blocking rodent access, providing a permanent solution to prevent rats from entering your premises through pipes and drains.',
    benefits: [
      'Permanent barrier against rodent entry',
      'Durable stainless steel construction',
      'Does not obstruct water flow or drainage',
      'Suitable for all types of pipes and drains',
      'Low maintenance and long-lasting',
      'Prevents disease transmission from rodents',
    ],
    process: [
      'Site survey to identify all potential rodent entry points',
      'Assessment of pipe sizes and drainage system layout',
      'Selection of appropriate rat guard sizes and types',
      'Professional installation on all vulnerable points',
      'Testing to ensure proper drainage and effectiveness',
      'Maintenance guidance and warranty information',
    ],
    image: '/assets/generated/service-rat-guard.dim_1200x800.png',
  },
  {
    id: 'mosquitoes',
    slug: 'mosquitoes-control',
    name: 'Mosquitoes Control',
    shortDescription: 'Advanced mosquito control solutions including fogging and larvicide treatments for disease prevention.',
    description: 'Our comprehensive mosquito control program combines multiple strategies to reduce mosquito populations and protect your family from mosquito-borne diseases. We use advanced fogging techniques, larvicide treatments, and breeding site elimination to provide effective, long-lasting mosquito control. Our eco-friendly solutions target mosquitoes at all life stages while being safe for humans, pets, and beneficial insects.',
    benefits: [
      'Significant reduction in mosquito population',
      'Protection against dengue, malaria, and other diseases',
      'Eco-friendly treatment options available',
      'Indoor and outdoor treatment coverage',
      'Long-lasting residual effect',
      'Regular monitoring and maintenance programs',
    ],
    process: [
      'Property inspection to identify breeding sites',
      'Elimination of standing water and breeding grounds',
      'Application of larvicide in water bodies',
      'Fogging treatment in outdoor areas',
      'Indoor residual spray in key areas',
      'Follow-up treatments and monitoring as needed',
    ],
    image: '/assets/generated/service-mosquitoes.dim_1200x800.png',
  },
  {
    id: 'flies',
    slug: 'flies-control',
    name: 'Flies Control',
    shortDescription: 'Comprehensive fly control using integrated pest management techniques for homes and businesses.',
    description: 'Keep your premises fly-free with our integrated fly control solutions. We employ a combination of sanitation improvements, exclusion techniques, and targeted treatments to eliminate flies and prevent future infestations. Our approach is particularly effective for restaurants, food processing units, hospitals, and residential properties where fly control is critical for health and hygiene.',
    benefits: [
      'Effective control of all common fly species',
      'Improved hygiene and sanitation',
      'Reduced risk of disease transmission',
      'Customized solutions for different environments',
      'Safe for food handling areas',
      'Ongoing monitoring and prevention',
    ],
    process: [
      'Identification of fly species and breeding sources',
      'Sanitation assessment and recommendations',
      'Installation of fly traps and exclusion devices',
      'Application of targeted insecticides in breeding areas',
      'Implementation of preventive measures',
      'Regular monitoring and maintenance visits',
    ],
    image: '/assets/generated/service-flies.dim_1200x800.png',
  },
  {
    id: 'bird-netting',
    slug: 'bird-netting-services',
    name: 'Bird Netting Services',
    shortDescription: 'Professional bird netting installation to protect buildings from bird-related damage and health hazards.',
    description: 'Protect your property from bird-related problems with our professional bird netting services. We install high-quality, UV-stabilized netting that provides a humane and effective barrier against pigeons, crows, and other birds. Our netting solutions are ideal for balconies, terraces, warehouses, and commercial buildings, preventing bird droppings, nesting, and the associated health and structural risks.',
    benefits: [
      'Humane bird deterrent solution',
      'Prevents property damage from droppings',
      'Reduces health risks from bird-borne diseases',
      'UV-stabilized, weather-resistant materials',
      'Virtually invisible from a distance',
      'Long-lasting protection with minimal maintenance',
    ],
    process: [
      'Site assessment and measurement',
      'Selection of appropriate netting type and mesh size',
      'Custom fabrication of netting panels',
      'Professional installation using secure mounting systems',
      'Quality check to ensure complete coverage',
      'Maintenance and inspection services available',
    ],
    image: '/assets/generated/service-bird-netting.dim_1200x800.png',
  },
  {
    id: 'sanitisation',
    slug: 'sanitisation-disinfection-spray',
    name: 'Sanitisation & Disinfection Spray',
    shortDescription: 'Professional sanitisation and disinfection services to eliminate harmful pathogens and ensure a healthy environment.',
    description: 'Our professional sanitisation and disinfection service provides comprehensive protection against viruses, bacteria, and other harmful pathogens. Using hospital-grade disinfectants and advanced fogging equipment, we ensure thorough coverage of all surfaces and hard-to-reach areas. This service is essential for homes, offices, schools, hospitals, and any space where health and hygiene are paramount.',
    benefits: [
      'Eliminates 99.9% of viruses and bacteria',
      'Hospital-grade disinfectants used',
      'Safe for humans and pets after drying',
      'Comprehensive coverage including hard-to-reach areas',
      'Reduces risk of infection and disease spread',
      'Suitable for all types of premises',
    ],
    process: [
      'Pre-treatment consultation and area assessment',
      'Preparation of space and removal of sensitive items',
      'Application of disinfectant using ULV fogging equipment',
      'Treatment of all surfaces, furniture, and fixtures',
      'Adequate drying time as per product specifications',
      'Post-treatment inspection and clearance certificate',
    ],
    image: '/assets/generated/service-sanitisation.dim_1200x800.png',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
