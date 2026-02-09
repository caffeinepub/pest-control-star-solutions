export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sagar Dhole',
    role: 'Senior Pest Control Specialist',
    image: '/assets/generated/team-1.dim_800x800.png',
  },
  {
    id: 2,
    name: 'Prayag Dhole',
    role: 'Operations Manager',
    image: '/assets/generated/team-2.dim_800x800.png',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Technical Lead',
    image: '/assets/generated/team-3.dim_800x800.png',
  },
];
