"use client"
import Addressbar from "@/components/client/Addressbar";
import ExplorerTitle from "@/components/client/ExplorerTitle";
import Sidebar from "@/components/server/Sidebar";
import { ChildrenType } from "@/types/types"
import { motion, useDragControls } from "framer-motion"
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";


const Layout = ({ children }: ChildrenType) => {

    const controls = useDragControls();
    const pathname = usePathname();
    const lastPath = pathname.split('/')[pathname.split('/').length - 1]
    const explorerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        explorerRef.current?.focus();
    }, [])

    const Paths: { [index: string]: { icon: string, title: string } } = {
        ThisPc: {
            icon: '/icons/Computer.svg',
            title: 'This PC'
        },
        about: {
            icon: '/icons/user.png',
            title: 'About Me'
        },
        ['not-found']: {
            icon: '/icons/user.png',
            title: 'Not Found'
        },
    }

    return (
        <motion.section
            ref={explorerRef}
            className={`z-20 overflow-hidden flex flex-col absolute h-4/6 w-2/3 border-[1px] border-transparent focus:border-glass rounded-lg shadow-2xl bg-glass backdrop-blur-[900px] focus:bg-transparent focus:backdrop-blur-3xl`}
            tabIndex={0}
            autoFocus
            drag
            initial={{
                scale: 0,
                opacity: 0
            }}
            animate={{
                scale: 1,
                opacity: 1
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
            <ExplorerTitle icon={pathname === '/explorer' ? Paths.ThisPc.icon : Paths[lastPath].icon} title={pathname === '/explorer' ? Paths.ThisPc.title : Paths[lastPath].title} controls={controls} />
            <Addressbar title={pathname === '/explorer' ? Paths.ThisPc.title : Paths[lastPath].title} />

            <section className="flex gap-2 bg-glass backdrop-blur-3xl h-full" >
                <Sidebar />
                {children}
            </section>
        </motion.section>
    )
}
export default Layout