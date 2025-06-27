import { Pdf } from "@/components/Pdf";
import { Download } from "lucide-react";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="overflow-y-auto p-2 pb-10 flex gap-6 flex-1 flex-col h-full">
      <Pdf url="/resume.pdf" />
      <Link
        href="/resume.pdf"
        className="flex items-center justify-center bg-tab hover:bg-titleBar transition-colors py-2 gap-2 px-4 rounded-full border"
        download={"Rahul_Resume_(Web_Developer).pdf"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Download className="w-4 h-4" />
        Download Resume
      </Link>
    </div>
  );
};

export default Resume;
