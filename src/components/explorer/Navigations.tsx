"use client";
import { usePathname, useRouter } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiArrowUp } from "react-icons/fi";
import { MdOutlineRefresh } from "react-icons/md";

const Navigations = () => {
  const router = useRouter();
  const pathname = usePathname();

  const goBack = () => {
    const lastSlashIndex = pathname.lastIndexOf("/");
    const newPath = pathname.substring(0, lastSlashIndex);
    router.push(newPath);
  };

  const goLevelUp = () => router.back();

  const refresh = () => {
    router.refresh();
  };

  return (
    <>
      <div
        className={`${
          pathname.lastIndexOf("/") ? "opacity-100" : "opacity-20"
        } p-2 hover:bg-hover transition-all rounded`}
        onClick={goBack}
      >
        <FiArrowLeft />
      </div>
      <div className={`p-2 opacity-20 hover:bg-hover transition-all rounded`}>
        <FiArrowRight />
      </div>
      <div
        onClick={goLevelUp}
        className="p-2 hover:bg-hover transition-all rounded"
      >
        <FiArrowUp />
      </div>

      <div
        onClick={refresh}
        className="p-2 hover:bg-hover transition-all rounded"
      >
        <MdOutlineRefresh />
      </div>
    </>
  );
};

export default Navigations;
