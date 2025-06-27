import Group from "@/components/Group";
import { Pdf } from "@/components/Pdf";
import { Download } from "lucide-react";
import Link from "next/link";

const Certificates = () => {
  return (
    <div className="overflow-y-auto p-2 pb-10 flex gap-6 flex-1 flex-col h-full">
      <Group title="Salesforce" description="Salesforce Developer">
        <div className="w-full flex flex-col gap-6 pb-4">
          <div className="flex gap-4 md:flex-row flex-col items-center">
            <Pdf url="/certificates/salesforce.pdf" />
          </div>
          <Link
            href="/certificates/salesforce.pdf"
            className="flex items-center justify-center bg-tab hover:bg-titleBar transition-colors py-2 gap-2 px-4 rounded-full border"
            download={"Rahul_Salesforce_Certificate.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-4 h-4" />
            Download Certificate
          </Link>
        </div>
      </Group>

      <Group title="Google" description="Google IT Support">
        <div className="w-full flex flex-col gap-6 pb-4">
          <div className="flex gap-4 md:flex-row flex-col items-center">
            <Pdf url="/certificates/google.pdf" />
          </div>
          <Link
            href="/certificates/google.pdf"
            className="flex items-center justify-center bg-tab hover:bg-titleBar transition-colors py-2 gap-2 px-4 rounded-full border"
            download={"Rahul_Google_Certificate.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-4 h-4" />
            Download Certificate
          </Link>
        </div>
      </Group>
      <Group title="NPTEL" description="Python">
        <div className="w-full flex flex-col gap-6 pb-4">
          <div className="flex gap-4 md:flex-row flex-col items-center">
            <Pdf url="/certificates/python.pdf" />
          </div>
          <Link
            href="/certificates/python.pdf"
            className="flex items-center justify-center bg-tab hover:bg-titleBar transition-colors py-2 gap-2 px-4 rounded-full border"
            download={"Rahul_Python_Certificate.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-4 h-4" />
            Download Certificate
          </Link>
        </div>
      </Group>
      <Group title="NPTEL" description="DBMS">
        <div className="w-full flex flex-col gap-6 pb-4">
          <div className="flex gap-4 md:flex-row flex-col items-center">
            <Pdf url="/certificates/dbms.pdf" />
          </div>
          <Link
            href="/certificates/dbms.pdf"
            className="flex items-center justify-center bg-tab hover:bg-titleBar transition-colors py-2 gap-2 px-4 rounded-full border"
            download={"Rahul_DBMS_Certificate.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-4 h-4" />
            Download Certificate
          </Link>
        </div>
      </Group>
    </div>
  );
};
export default Certificates;
