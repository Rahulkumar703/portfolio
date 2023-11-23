"use client"
import Image from "next/image"
import { IconType } from "../../types/types"
import { useState } from 'react'
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { motion } from 'framer-motion'

const Icon = ({ icon, label, url }: IconType) => {


    const [selected, setselected] = useState(false);
    const router = useRouter();
    const iconRef = useRef<HTMLSpanElement>(null);

    const selectIcon = () => {
        setselected(true)
    }

    const openWindow = () => {
        setselected(false)
        router.push(url);
    }

    useEffect(() => {
        const handleOutClick = (e: MouseEvent) => {
            if (iconRef.current && !iconRef.current.contains(e.target as Node)) {
                setselected(false);
            }
        }
        document.addEventListener('click', handleOutClick);

        return () => {
            document.removeEventListener('click', handleOutClick);
        }
    }, [])


    return (
        <motion.span
            className={`w-[4.5rem] flex flex-col gap-1 items-center justify-center text-center h-fit px-2 py-1 hover:bg-hover ${selected ? 'bg-hoverDark' : 'bg-none'}  transition-all rounded-sm hover:backdrop-blur-md hover:shadow-sm`}
            onClick={selectIcon}
            onDoubleClick={openWindow}
            draggable={false}
            onSelect={e => e.preventDefault()}
            transition={{ type: "just", delay: 0 }}
            ref={iconRef}
            initial={{ scale: .5, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
        >
            <Image priority src={icon} width={64} height={64} alt={label} className="w-12 pointer-events-none select-none drop-shadow-sm" />
            <h4 className="pointer-events-none select-none text-xs font-extralight text-white">{label}</h4>
        </motion.span>
    )
}
export default Icon