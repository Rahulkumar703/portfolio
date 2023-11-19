"use client"
import { ChildrenType } from "@/types/types"
import { motion } from "framer-motion"


const layout = ({ children }: ChildrenType) => {

    return (
        <motion.section className={`z-20 overflow-hidden flex flex-col bg-card absolute h-4/6 w-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl border rounded-lg`}
            drag
            dragMomentum={false}
            transition={{
                type: "tween",
                delay: 0,
                ease: "easeOut",

            }}
        >
            {children}
        </motion.section>
    )
}
export default layout