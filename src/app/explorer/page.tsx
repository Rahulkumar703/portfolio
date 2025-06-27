// import Certificates from "@/components/pages/Certificates";
// import Education from "@/components/pages/Education";
// import Experiences from "@/components/pages/Expertiences";
// import Projects from "@/components/pages/Projects";
// import Resume from "@/components/pages/Resume";
// import Skills from "@/components/pages/Skills";
import ProfileImage from "@/components/ui/ProfileImage";
import { Github, Linkedin, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

export const metadata = {
  title: "Rahul Kumar",
  description: "Explore your files and folders",
};
const Certificates = dynamic(() => import("@/components/pages/Certificates"));
const Education = dynamic(() => import("@/components/pages/Education"));
const Projects = dynamic(() => import("@/components/pages/Projects"));
const Resume = dynamic(() => import("@/components/pages/Resume"));
const Skills = dynamic(() => import("@/components/pages/Skills"));
const Experiences = dynamic(() => import("@/components/pages/Expertiences"));

const page = () => {
  return (
    <div className="p-2 flex flex-1 flex-col items-center h-[calc(100vh-135px)] overflow-y-auto">
      {/* Profile Information */}
      <div className="p-6 flex md:flex-row flex-col items-center gap-6 w-full border rounded-3xl">
        <ProfileImage src="/me.jpg" alt="Profile Image" />
        <div className="flex flex-col flex-1 gap-2">
          <h1 className="text-4xl font-bold">Rahul Kumar</h1>
          <Link
            href={"mailto:rahulkumar703@outlook.com"}
            className="text-sm text-foreground/80 text-center md:text-left"
          >
            rahulkumar703@outlook.com
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Full Stack Developer
          </p>
          <div className="flex md:flex-row flex-col mt-4 gap-2">
            <Link
              target="_blank"
              className="flex items-center bg-tab hover:bg-titleBar transition-colors py-1 px-4 rounded-full border"
              href={"https://github.com/rahulkumar703"}
            >
              <Github className="w-4 h-4" />
              <span className="ml-2">GitHub</span>
            </Link>
            <Link
              target="_blank"
              className="flex items-center bg-tab hover:bg-titleBar transition-colors py-1 px-4 rounded-full border"
              href={"https://linkedin.com/in/rahulkumar703"}
            >
              <Linkedin className="w-4 h-4" />
              <span className="ml-2">LinkedIn</span>
            </Link>
          </div>
          <Link
            target="_blank"
            className="flex items-center bg-tab hover:bg-titleBar transition-colors py-1 px-4 rounded-full ml-auto border"
            href={"tel:+917050584103"}
          >
            <Phone className="w-4 h-4" />
            <span className="ml-2">+91 70505 84103</span>
          </Link>
        </div>
      </div>

      {/* Folders */}
      {/* <Group
        title="About Me"
        description="I am a Full Stack Developer with a passion for building web
            applications. I have experience in various technologies and love to
            learn new things."
        className="mt-6"
      >
        <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {folders.map((folder, index) => {
            return (
              <Folder
                key={index}
                name={folder.name}
                href={folder.href}
                className="w-full"
              />
            );
          })}
        </div>
      </Group> */}

      {/* Experience */}
      <div className="flex flex-col w-full mt-6 relative">
        <h2 className="text-blue-500 z-10 text-2xl font-bold sticky -top-2 py-4 bg-background">
          Experiences
        </h2>
        <Experiences />
      </div>

      {/* Projects */}
      <div className="flex flex-col w-full mt-6 relative">
        <h2 className="text-blue-500 z-10 text-2xl font-bold sticky -top-2 py-4 bg-background">
          Projects
        </h2>
        <Projects />
      </div>

      {/* Skills */}
      <div className="flex flex-col w-full mt-6 relative">
        <h2 className="text-blue-500 z-10 text-2xl font-bold sticky -top-2 py-4 bg-background">
          Skills
        </h2>
        <Skills />
      </div>

      {/* Education */}
      <div className="flex flex-col w-full mt-6 relative">
        <h2 className="text-blue-500 z-10 text-2xl font-bold sticky -top-2 py-4 bg-background">
          Education
        </h2>
        <Education />
      </div>

      {/* Resume */}
      <div className="flex flex-col w-full mt-6 relative">
        <h2 className="text-blue-500 z-10 text-2xl font-bold sticky -top-2 py-4 bg-background">
          Resume
        </h2>
        <Resume />
      </div>

      {/* Certificates */}
      <div className="flex flex-col w-full mt-6 relative">
        <h2 className="text-blue-500 z-10 text-2xl font-bold sticky -top-2 py-4 bg-background">
          Certificates
        </h2>
        <Certificates />
      </div>
    </div>
  );
};

export default page;
