import Group from "@/components/Group";
import LinkPreview from "@/components/linkPreview";
import Image from "next/image";

const Experiences = () => {
  return (
    <div className="overflow-y-auto p-2 pb-10 flex gap-6 flex-1 flex-col h-full">
      <Group
        title="Full Stack Developer Intern"
        description="Feb 2024 - Apr 2024"
      >
        <div className="w-full flex flex-col gap-6 pb-4">
          <div className="flex gap-4 md:flex-row flex-col md:items-start items-center">
            <Image
              src={"/logo/gangakoshi-logo.png"}
              width={100}
              height={100}
              alt="Gangakoshi Agritech Pvt. Ltd."
              className="shrink-0 bg-white rounded-full w-28 h-28 object-cover"
            />
            <div className=" flex flex-col items-center md:items-start text-center justify-center w-full">
              <h2 className="font-semibold text-xl">
                Gangakoshi Agritech Pvt. Ltd.
              </h2>
              <span className="text-muted-foreground">Bihar Startup</span>

              <p className="md:ml-auto">Motihari, Bihar</p>
            </div>
          </div>

          <div className="flex gap-6 lg:flex-row flex-col">
            <ul className="text-muted-foreground flex flex-col gap-2">
              <li className="list-disc ml-6">
                Engineered a multilingual Full Stack responsive web application
                with a Firebase Back End and secure authentication using
                next-auth.
              </li>
              <li className="list-disc ml-6">
                Implemented{" "}
                <strong className="text-foreground font-semibold">
                  Server-Side Rendering
                </strong>{" "}
                to enhance SEO and Website performance.
              </li>
              <li className="list-disc ml-6">
                Added theme support, enabling 3-mode selection. Automatic
                synchronization with the user&apos;s system theme or manual
                selection.
              </li>
              <li className="list-disc ml-6">
                Integrated machine learning APIs for prediction of 23+ Crop and
                Fertilizer based on soil test reports.
              </li>
              <li className="list-disc ml-6">
                Built the Margdarshan section for sharing agricultural tips,
                complete with an Admin dashboard for efficient management.
              </li>
            </ul>
            <LinkPreview
              className="min-w-96 mb-auto"
              url={"https://gangakoshi.com"}
            />
          </div>
        </div>
      </Group>
      <Group title="React Developer Intern" description="Feb 2023 - Apr 2023">
        <div className="w-full flex flex-col gap-6 pb-4">
          <div className="flex gap-4 md:flex-row flex-col md:items-start items-center">
            <Image
              src={"/logo/atplc-logo.png"}
              width={100}
              height={100}
              alt="ATPLC"
              className="shrink-0 bg-white rounded-full w-28 h-28 object-cover"
            />
            <div className=" flex flex-col items-center md:items-start text-center justify-center w-full">
              <h2 className="font-semibold text-xl">ATPLC</h2>
              <span className="text-muted-foreground">Bihar Startup</span>

              <p className="md:ml-auto">Madhubani, Bihar</p>
              {/* <Link
                className="text-blue-500 flex items-center gap-2 text-sm"
                target="_blank"
                href={"https://atplc.in"}
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </Link> */}
            </div>
          </div>
          <div className="flex lg:flex-row-reverse flex-col gap-6">
            <ul className="text-muted-foreground flex flex-col gap-2">
              <li className="list-disc ml-6">
                Created a responsive Front End web application with a Student
                Dashboard supporting 157+ registered students, enabling them to
                complete training, manage tasks, and receive certificates upon
                meeting specific criteria.
              </li>
              <li className="list-disc ml-6">
                Integrated a Django API for efficient data retrieval from
                backend servers.
              </li>
              <li className="list-disc ml-6">
                Enhanced application performance by implementing code splitting
                and optimizing the virtual DOM, leading to faster load times and
                a smoother user experience.
              </li>
              <li className="list-disc ml-6">
                Integrated the RazorPay payment gateway for seamless course
                purchases.
              </li>
            </ul>
            {/* Render Preview */}
            <LinkPreview
              className="min-w-96 mb-auto"
              url={"https://atplc.in"}
            />
          </div>
        </div>
      </Group>
    </div>
  );
};
export default Experiences;
