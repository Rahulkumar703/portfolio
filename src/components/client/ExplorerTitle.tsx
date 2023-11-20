"use client"

import { useRouter } from "next/navigation";
import WindowActions from "./WindowActions";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import { ExplorerTitleType } from "../../types/types";
import Addressbar from "./Addressbar";
import { motion } from 'framer-motion'

const ExplorerTitle = ({ icon, title, controls }: ExplorerTitleType) => {

    const router = useRouter();

    const closeWindow = () => {
        router.back();
    }

    return (
        <motion.div className="bg-titleBar w-full flex flex-col select-none relative"
            autoFocus
            onPointerDown={e => controls.start(e)}
        >
            <motion.div
                initial={{ y: 5 }}
                animate={{ y: 0 }}
                transition={{
                    type: "tween",
                    ease: "easeOut",
                }}
                onPointerDownCapture={e => e.stopPropagation()}
                className="ml-2 mt-2 flex gap-2 items-center p-2 bg-tab rounded-t text-xs font-semibold w-60 min-w-[10rem] relative after:absolute after:-bottom-[.4px] after:-left-[4px] after:w-[4px] after:h-[4px] after:rounded-br-md after:shadow-cutout-left before:absolute before:-bottom-[.4px] before:-right-[4px] before:w-[4px] before:h-[4px] before:rounded-bl-md before:shadow-cutout-right">
                <Image priority src={icon} width={16} height={16} alt={title} className="pointer-events-none select-none" />
                {title}
                <FiX className="ml-auto p-1 hover:bg-hoverDark rounded transition-all" size={22} onClick={closeWindow} />
            </motion.div>
            <Addressbar />
            <WindowActions />
        </motion.div>
    )
}
export default ExplorerTitle