"use client";
import { ChildrenType } from "@/types/types";
import { motion, useDragControls, useMotionValue } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Explorer = ({ children }: ChildrenType) => {
  const controls = useDragControls();
  const pathname = usePathname();
  const lastPath = pathname.split("/")[pathname.split("/").length - 1];
  const explorerRef = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const Paths: { [index: string]: any } = {
    explorer: {
      icon: "/icons/Computer.svg",
      title: "This PC",
    },
    education: {
      icon: "/icons/folder-open.png",
      title: "Education",
    },
    skills: {
      icon: "/icons/folder-open.png",
      title: "Skills",
    },
    experiences: {
      icon: "/icons/folder-open.png",
      title: "Experiences",
    },
    projects: {
      icon: "/icons/folder-open.png",
      title: "Projects",
    },
    certificates: {
      icon: "/icons/folder-open.png",
      title: "Certificates",
    },
    resume: {
      icon: "/icons/folder-open.png",
      title: "Resume",
    },
  };

  return (
    <motion.section
      ref={explorerRef}
      className={`z-20 overflow-hidden flex flex-col absolute border-[1px] border-transparent focus:border-glass rounded-lg shadow-2xl bg-glass backdrop-blur-[900px] focus:bg-transparent focus:backdrop-blur-3xl m-0 h-[calc(100vh-48px)] w-full focus:outline-none`}
      style={{ x, y }}
      tabIndex={0}
      autoFocus
      drag
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      dragMomentum={false}
      dragControls={controls}
      dragListener={false}
      transition={{
        type: "tween",
        delay: 0,
        ease: "easeOut",
      }}
    >
      <Header
        explorerRef={explorerRef}
        x={x}
        y={y}
        icon={Paths[lastPath]?.icon || "/icons/folder-open.png"}
        title={Paths[lastPath]?.title || "Explorer"}
        controls={controls}
      />
      <section className="bg-glass backdrop-blur-3xl">
        <div className="flex">
          <Sidebar />
          <div className="bg-background flex-1 h-[calc(100vh-135px)]">
            {children}
          </div>
        </div>
      </section>
    </motion.section>
  );
};
export default Explorer;
