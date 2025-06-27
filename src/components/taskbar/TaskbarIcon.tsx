"use client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { TaskbarIconsType } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TaskbarIcon = ({ icon, alt, href }: TaskbarIconsType) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <AnimatePresence>
        <motion.section
          className={`relative w-10 h-10 p-2 hover:bg-white/40 rounded border-t-[1px] hover:border-gray-50/5 border-gray-50/0 hover:shadow-md transition-all ease-in flex-shrink-0 ${
            pathname.startsWith("/explorer") && href === "/explorer"
              ? "bg-white/40 hover:bg-slate-50/30 "
              : ""
          }`}
          initial={{ scale: 0.5, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "tween", ease: "easeIn", duration: 0.3 }}
        >
          <Image
            src={icon}
            width={24}
            height={24}
            alt={alt}
            className="w-6 h-6 object-cover"
            onMouseDown={(e) => (e.currentTarget.style.scale = ".8")}
            onMouseUp={(e) => (e.currentTarget.style.scale = "1")}
          />
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "33.333333%" }}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] ${
              pathname.startsWith("/explorer") && href === "/explorer"
                ? "bg-primary"
                : "bg-transparent"
            } mt-auto rounded`}
          />
        </motion.section>
      </AnimatePresence>
    </Link>
  );
};

export default TaskbarIcon;
