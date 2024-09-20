import { TeamMemberCard } from "@/components/TeamMemberCard";
import { BackgroundBeams } from "@/components/ui/background-beams";

const teamMembers = [
  {
    name: "Amitava Datta",
    role: "Team Leader",
    gender: "M",
    email: "dattaarup2004@gmail.com",
    phone: "8910168864",
    stream: "CSE-AIML",
    year: "2nd",
    linkedin: "https://linkedin.com/in/amitava-datta",
    github: "https://github.com/amitava-datta"
  },
  {
    name: "Pranay De",
    role: "Team Member",
    gender: "M",
    email: "pranayde201@gmail.com",
    phone: "8100460128",
    stream: "CSE-AIML",
    year: "2nd",
    linkedin: "https://linkedin.com/in/pranay-de",
    github: "https://github.com/pranay-de"
  },
  {
    name: "Anirban Ghosh",
    role: "Team Member",
    gender: "M",
    email: "pranayde201@gmail.com",
    phone: "8100460128",
    stream: "CSE-AIML",
    year: "2nd",
    linkedin: "https://linkedin.com/in/pranay-de",
    github: "https://github.com/pranay-de"
  },
  {
    name: "Srinjinee Mitra",
    role: "Team Member",
    gender: "M",
    email: "pranayde201@gmail.com",
    phone: "8100460128",
    stream: "CSE-AIML",
    year: "2nd",
    linkedin: "https://linkedin.com/in/pranay-de",
    github: "https://github.com/pranay-de"
  },
  {
    name: "Rudranil Das",
    role: "Team Member",
    gender: "M",
    email: "pranayde201@gmail.com",
    phone: "8100460128",
    stream: "CSE-AIML",
    year: "2nd",
    linkedin: "https://linkedin.com/in/pranay-de",
    github: "https://github.com/pranay-de"
  },
  {
    name: "Aitijhya Roy",
    role: "Team Member",
    gender: "M",
    email: "pranayde201@gmail.com",
    phone: "8100460128",
    stream: "CSE-AIML",
    year: "2nd",
    linkedin: "https://linkedin.com/in/pranay-de",
    github: "https://github.com/pranay-de"
  },
  
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Meet Our Team Dev-Nexus
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}