import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface TeamMember {
  name: string;
  role: string;
  gender: string;
  email: string;
  phone: string;
  stream: string;
  year: string;
  linkedin: string;
  github: string;
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-200 dark:text-white"
        >
          {member.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {member.role} • {member.stream} • {member.year} Year
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={`https://api.dicebear.com/6.x/initials/svg?seed=${member.name}`}
            height="200"
            width="200"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={member.name}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {member.email}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {member.phone}
          </CardItem>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <CardItem translateZ={20} as="button">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="outline">
                <FaLinkedin className="h-4 w-4" />
              </Button>
            </a>
          </CardItem>
          <CardItem translateZ={20} as="button">
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="outline">
                <FaGithub className="h-4 w-4" />
              </Button>
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}