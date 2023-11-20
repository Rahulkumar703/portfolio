"use client"
import ExplorerTitle from "@/components/client/ExplorerTitle";
import { ChildrenType } from "@/types/types"
import { motion, useDragControls } from "framer-motion"
import { usePathname } from "next/navigation";


const Layout = ({ children }: ChildrenType) => {

    const controls = useDragControls();
    const pathname = usePathname();
    const lastPath = pathname.split('/')[pathname.split('/').length - 1]

    const Paths: { [index: string]: any } = {
        ThisPC: {
            icon: '/icons/Computer.svg',
            title: 'About Me'
        },
        AboutMe: {
            icon: '/icons/user.png',
            title: 'This PC'
        }
    }

    return (
        <motion.section
            className={`z-20 overflow-hidden flex flex-col bg-card absolute h-4/6 w-2/3 backdrop-blur-xl border-transparent rounded-lg`}
            drag
            initial={{
                x: 0,
                y: 0
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
            <ExplorerTitle icon={Paths[lastPath].icon} title={Paths[lastPath].title} controls={controls} />
            {children}
        </motion.section>
    )
}
export default Layout