"use client";
import { usePathname } from "next/navigation";
import Navigations from "./Navigations";

const Addressbar = () => {
  const pathname = usePathname();
  const resolvedPathName =
    pathname === "/explorer"
      ? "This PC"
      : pathname.split("/explorer/")[1][0].toUpperCase() +
        pathname.split("/explorer/")[1].slice(1);
  return (
    <div
      className="bg-tab p-1 flex gap-3"
      onPointerDownCapture={(e) => e.stopPropagation()}
    >
      <Navigations />
      <div className="flex-1 flex items-center">
        <input
          type="text"
          className="bg-transparent outline-none text-text w-full px-2"
          readOnly
          value={resolvedPathName}
        />
      </div>
    </div>
  );
};
export default Addressbar;
