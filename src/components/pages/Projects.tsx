import Group from "@/components/Group";
import LinkPreview from "@/components/linkPreview";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="overflow-y-auto p-2 pb-10 flex gap-6 flex-1 flex-col h-full">
      <Group
        title="Coding Club Website"
        description="Next.js, Node.js, MongoDB, Tailwind CSS, NextAuth, React.js, PDFlib, Judge0, Monaco, and more"
      >
        <div className="w-full flex flex-col gap-6 pb-4">
          <div className="flex gap-4 md:flex-row flex-col items-center">
            <Image
              src={"/logo/zeroone-logo.png"}
              width={100}
              height={100}
              alt="Zero One Coding Club"
              className="shrink-0 bg-black rounded-full w-28 h-28 object-fill"
            />
            <div className=" flex flex-col items-center md:items-start text-center justify-center w-full">
              <h2 className="font-semibold text-xl">ZERO ONE</h2>
              <span className="text-muted-foreground">
                College&apos;s Coding Club
              </span>
              <Link
                target="_blank"
                className=" md:ml-auto mt-4 flex items-center bg-tab hover:bg-titleBar transition-colors py-1 px-4 rounded-full border"
                href={"https://github.com/Rahulkumar703/zero-one-website"}
              >
                <Github className="w-4 h-4" />
                <span className="ml-2">Code</span>
              </Link>
            </div>
          </div>

          <div className="flex gap-6 lg:flex-row flex-col">
            <div className="flex flex-col">
              <ul className="text-muted-foreground flex flex-col gap-2">
                <li className="list-disc ml-6">
                  Developed and launched the ZERO ONE Coding Club website for
                  the college, offering a comprehensive platform for students to
                  access coding resources, events, contests and{" "}
                  <strong className="text-foreground font-semibold">
                    POTD
                  </strong>{" "}
                  content, for practice coding.
                </li>
                <li className="list-disc ml-6">
                  Created an admin pannel for{" "}
                  <strong className="text-foreground font-semibold">
                    automating
                  </strong>{" "}
                  contest management, question management, and student
                  management, significantly{" "}
                  <strong className="text-foreground font-semibold">
                    reducing the workload
                  </strong>{" "}
                  on organizers.
                </li>
                <li className="list-disc ml-6">
                  Combined Multiple Question types like MCQ, Coding, Debugging
                  from{" "}
                  <strong className="text-foreground font-semibold">
                    multiple Schemas
                  </strong>
                  .
                </li>
                <li className="list-disc ml-6">
                  Implemented User dashboard and Problem of the Day using
                  web-based Code compiler supporting multiple languages: C/C++,
                  Java, Python, and JavaScript, SQL.
                </li>
                <li className="list-disc ml-6">
                  Developed a complete Certificate generation and Verification
                  feature with customizable templates.
                </li>
              </ul>
            </div>
            <LinkPreview
              className="min-w-96 mb-auto"
              url={"https://zeroonemce.com"}
            />
          </div>
        </div>
      </Group>

      <Group
        title="Text to Video Generator"
        description="Python, OpenAI, FastAPI, MongoDB, Next.js, Tailwind CSS, and more"
      >
        <div className="w-full flex flex-col gap-6 pb-4">
          <div className="flex gap-4 md:flex-row flex-col items-center">
            <Image
              src={"/logo/tih.png"}
              width={100}
              height={100}
              alt="TIH Chanakya Fellowship"
              className="shrink-0 bg-black rounded-full w-28 h-28 object-fill"
            />
            <div className=" flex flex-col items-center md:items-start text-center justify-center w-full">
              <h2 className="font-semibold text-xl">
                PIB Press to Multilingual Video
              </h2>
              <span className="text-muted-foreground">
                TIH Chanakya Fellowship (IIT Bombay)
              </span>

              <Link
                target="_blank"
                className=" md:ml-auto mt-4 flex items-center bg-tab hover:bg-titleBar transition-colors py-1 px-4 rounded-full border"
                href={"https://github.com/cse21mce/Text-to-Video"}
              >
                <Github className="w-4 h-4" />
                <span className="ml-2">Code</span>
              </Link>
            </div>
          </div>

          <div className="flex gap-6 lg:flex-row flex-col">
            <div className="flex flex-col">
              <ul className="text-muted-foreground flex flex-col gap-2">
                <li className="list-disc ml-6">
                  Collaborated with a team of 5 members to convert pib.gov.in
                  press releases into reels in 13 Indian regional languages.
                </li>
                <li className="list-disc ml-6">
                  Developed automated translation API with FastAPI to translate
                  content into a target language.
                </li>
                <li className="list-disc ml-6">
                  Utilized Google Image Search and diffusion model based image
                  generation to generate related images for video creation.
                </li>
                <li className="list-disc ml-6">
                  Applied Multithreading to reduce the average video generation
                  time for press releases from 10 minutes to 4.7 minutes.
                </li>
                <li className="list-disc ml-6">
                  Designed the user interface in NEXT.JS and integrated it with
                  the APIs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Group>

      <Group title="Coding Contest" description="Jul 2024 - Jul 2024">
        <div className="w-full flex flex-col gap-6 pb-4">
          <div className="flex gap-4 md:flex-row flex-col items-center">
            <Image
              src={"/logo/zeroone-logo.png"}
              width={100}
              height={100}
              alt="ZERO ONE Coding Club"
              className="shrink-0 bg-black rounded-full w-28 h-28 object-cover"
            />
            <div className=" flex flex-col items-center md:items-start text-center justify-center w-full">
              <h2 className="font-semibold text-xl">SURGE</h2>
              <span className="text-muted-foreground">
                State level Coding Competition
              </span>

              <Link
                target="_blank"
                className=" md:ml-auto mt-4 flex items-center bg-tab hover:bg-titleBar transition-colors py-1 px-4 rounded-full border"
                href={"https://github.com/Rahulkumar703/Surge"}
              >
                <Github className="w-4 h-4" />
                <span className="ml-2">Code</span>
              </Link>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse flex-col gap-6">
            <ul className="text-muted-foreground flex flex-col gap-2">
              <li className="list-disc ml-6">
                Created a responsive Website for the SURGE Coding Contest, which
                is one of the largest coding contest in Bihar, with over 500+
                participants.
              </li>
              <li className="list-disc ml-6">
                Integrated a intractable 3D Globe on the landing page, providing
                users with an engaging and interactive experience.
              </li>
              <li className="list-disc ml-6">
                Created timeline for the contest, displaying important dates and
                events.
              </li>
              <li className="list-disc ml-6">
                listed the top 10 participants on the homepage, showcasing their
                achievements and leaderboard position.
              </li>
            </ul>
            {/* Render Preview */}
            <LinkPreview
              className="min-w-96 mb-auto"
              url={"https://event.zeroonemce.com/SURGE"}
            />
          </div>
        </div>
      </Group>
    </div>
  );
};
export default Projects;
