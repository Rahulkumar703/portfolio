import Resume from "@/components/pages/Resume";
import { Pdf } from "@/components/Pdf";
import { Download } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "My Resume",
  description: "Download my resume as a PDF file",
};

const ResumePage = () => {
  return <Resume />;
};

export default ResumePage;
