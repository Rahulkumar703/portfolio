"use client";

import { useRouter } from "next/navigation";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import { ExplorerHeaderType } from "../../types/types";
import Addressbar from "./Addressbar";
import { motion } from "framer-motion";
import ActionsBtns from "./ActionsBtns";

const Header = ({
  icon,
  title,
  controls,
  explorerRef,
  x,
  y,
}: ExplorerHeaderType) => {
  const router = useRouter();

  const closeWindow = () => {
    router.push("/");
  };

  return (
    <motion.div
      className="border-b-[1px] border-glass bg-glass backdrop-blur-[150px] w-full flex flex-col select-none relative"
      autoFocus
      onPointerDown={(e) => controls.start(e)}
    >
      <motion.div
        initial={{ y: 5 }}
        animate={{ y: 0 }}
        transition={{
          type: "tween",
          ease: "easeOut",
        }}
        onPointerDownCapture={(e) => e.stopPropagation()}
        className="border-t-[1px] border-glass ml-2 mt-2 flex gap-2 items-center p-2 bg-tab rounded-t-md text-xs font-semibold w-60 min-w-[10rem] relative after:absolute after:-bottom-[.4px] after:-left-[8px] after:w-[8px] after:h-[8px] after:rounded-br-md after:shadow-cutout-l before:absolute before:-bottom-[.8px] before:-right-[8px] before:w-[8px] before:h-[8px] before:rounded-bl-md before:shadow-cutout-r"
      >
        <Image
          priority
          src={icon}
          width={16}
          height={16}
          alt={title}
          className=" drop-shadow-md pointer-events-none select-none"
        />
        <p className="select-none">{title}</p>
        <FiX
          className="ml-auto p-1 hover:bg-destructive rounded transition-all"
          size={22}
          onClick={closeWindow}
        />
      </motion.div>
      <Addressbar />
      <ActionsBtns explorerRef={explorerRef} x={x} y={y} />
    </motion.div>
  );
};
export default Header;
