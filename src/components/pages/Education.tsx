import Group from "@/components/Group";
import { ExternalLink, School } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <div className="overflow-y-auto p-2 pb-10 flex gap-6 flex-1 flex-col items-center h-full">
      <Group title="B.Tech" description="Computer Science and Engineering">
        <div className="w-full flex-col gap-6 pb-4">
          <div className="flex gap-4 md:flex-row flex-col md:items-start items-center">
            <Image
              src={"/logo/mce-logo.png"}
              width={100}
              height={100}
              alt="Motihari College of Engineering"
              className="shrink-0 bg-white rounded-full w-28 h-28 object-cover"
            />
            <div className=" flex flex-col items-center md:items-start text-center justify-center w-full">
              <h2 className="font-semibold text-xl">
                Motihari College of Engineering
              </h2>
              <span className="text-muted-foreground">
                Bihar Engineering University, Patna
              </span>
              <p className="md:ml-auto">Motihari, Bihar (845401)</p>

              <Link
                className="text-blue-500 flex items-center gap-2 text-sm"
                target="_blank"
                href={"https://www.mcemotihari.ac.in/"}
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </Link>
              <div className="md:ml-auto text-muted-foreground">
                <p>2021 - May 2025</p>
                <p className="text-blue-500">CGPA 8.48</p>
              </div>
            </div>
          </div>
          {/* Render Marksheet PDF */}
        </div>
      </Group>

      {/* <Group
        isExpanded={false}
        title="B.Tech"
        description="Electronics & Communication Engineering"
      >
        <div className="w-full flex-col gap-6 pb-4">
          <div className="flex gap-4 md:flex-row flex-col md:items-start items-center">
            <Image
              src={"/logo/purnea-logo.png"}
              width={100}
              height={100}
              alt="Motihari College of Engineering"
              className="shrink-0 bg-white rounded-full w-28 h-28 object-cover"
            />
            <div className=" flex flex-col items-center md:items-start text-center justify-center w-full">
              <h2 className="font-semibold text-xl">
                Purnea College of Engineering
              </h2>
              <span className="text-muted-foreground">
                Bihar Engineering University, Patna
              </span>

              <p className="md:ml-auto">Purnea, Bihar (854303)</p>
              <Link
                className="text-blue-500 flex items-center gap-2 text-sm"
                target="_blank"
                href={"https://www.pcepurnia.org/"}
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </Link>
              <div className="md:ml-auto text-muted-foreground">
                <p>2020 - 2021</p>
              </div>
            </div>
          </div>
        </div>
      </Group> */}

      <Group title="12th" description="Science (PCM)">
        <div className="w-full flex-col gap-6 items-center pb-4">
          <div className="flex gap-4 md:flex-row flex-col md:items-start items-center">
            <div className="w-28 h-28 shrink-0 flex items-center justify-center bg-white text-black rounded-full  p-2">
              <MdSchool className="w-20 h-20" />
            </div>
            <div className=" flex flex-col md:items-start items-center text-center justify-center w-full">
              <h2 className="font-semibold text-xl">R.D.H +2 High School</h2>
              <span className="text-muted-foreground">
                Bihar School Examination Board, Patna
              </span>
              <p className="md:ml-auto">Rajgir, Bihar (803116)</p>
              <div className="md:ml-auto text-muted-foreground">
                <p>2018 - 2019</p>
                <p className="text-blue-500">76.4%</p>
              </div>
            </div>
          </div>
        </div>
      </Group>

      <Group title="10th" description="Science">
        <div className="w-full flex-col gap-6 items-center pb-4">
          <div className="flex gap-4 md:flex-row flex-col md:items-start items-center">
            <div className="w-28 h-28 shrink-0 flex items-center justify-center bg-white text-black rounded-full  p-2">
              <School className="w-20 h-20" />
            </div>
            <div className=" flex flex-col md:items-start items-center text-center justify-center w-full">
              <h2 className="font-semibold text-xl">R.D.H High School</h2>
              <span className="text-muted-foreground">
                Bihar School Examination Board, Patna
              </span>
              <p className="md:ml-auto">Rajgir, Bihar (803116)</p>
              <div className="md:ml-auto text-muted-foreground">
                <p>2016 - 2017</p>
                <p className="text-blue-500">81.6%</p>
              </div>
            </div>
          </div>
        </div>
      </Group>
    </div>
  );
};
export default Education;
