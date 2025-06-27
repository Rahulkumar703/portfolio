import Group from "@/components/Group";
import Image from "next/image";

const Skills = () => {
  const skills = {
    "Frontend Technologies": [
      {
        name: "HTML",
        image: "/logo/html-logo.png",
      },
      {
        name: "CSS",
        image: "/logo/css-logo.png",
      },
      {
        name: "Tailwind CSS",
        image: "/logo/tailwind-logo.png",
      },
      {
        name: "JavaScript",
        image: "/logo/javascript-logo.png",
      },
      {
        name: "TypeScript",
        image: "/logo/typescript-logo.png",
      },
      {
        name: "Next Js",
        image: "/logo/nextjs-logo.png",
      },
      {
        name: "React Js",
        image: "/logo/react-logo.png",
      },
      {
        name: "Redux & Redux Toolkit",
        image: "/logo/redux-logo.png",
      },
    ],
    "Backend Technologies": [
      {
        name: "Node Js",
        image: "/logo/node-logo.png",
      },
      {
        name: "Fast Api",
        image: "/logo/fastapi-logo.png",
      },
      {
        name: "Firebase",
        image: "/logo/firebase-logo.png",
      },
      {
        name: "Prisma",
        image: "/logo/prisma-logo.png",
      },
    ],
    Databases: [
      {
        name: "MongoDB",
        image: "/logo/mongo-logo.png",
      },
      {
        name: "MySQL",
        image: "/logo/sql-logo.png",
      },
    ],
    "Programing Languages": [
      {
        name: "C",
        image: "/logo/c-logo.png",
      },
      {
        name: "C++",
        image: "/logo/cpp-logo.png",
      },
    ],
    "Version Control": [
      {
        name: "Git",
        image: "/logo/git-logo.png",
      },
      {
        name: "GitHub",
        image: "/logo/github-logo.png",
      },
    ],
  };

  return (
    <div className="overflow-y-auto p-2 pb-10 flex gap-6 flex-1 flex-col h-full">
      <div className="flex flex-col gap-6 flex-1">
        {Object.entries(skills).map(([category, skills]) => (
          <Group key={category} title={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center border rounded-lg p-2 hover:bg-hover"
                >
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    className="bg-white rounded-full shrink-0 w-12 h-12 mr-2 object-contain"
                    width={48}
                    height={48}
                  />
                  <span className="text-lg font-semibold text-muted-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Group>
        ))}
      </div>
    </div>
  );
};
export default Skills;
