"use client"
import Image from "next/image"
import { IconType } from "../../types/types"
import { useState, useContext } from 'react'
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"


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
        <span
            className={`w-[4.5rem] flex flex-col gap-1 items-center justify-center text-center h-fit px-2 py-1 hover:bg-hover ${selected ? 'bg-hoverDark' : 'bg-none'}  transition-all rounded-sm`}
            onClick={selectIcon}
            onDoubleClick={openWindow}
            ref={iconRef}
        >
            <Image priority src={icon} width={64} height={64} alt={label} className="w-12 pointer-events-none select-none" />
            <h4 className="pointer-events-none select-none text-xs font-extralight">{label}</h4>
        </span>
    )
}
export default Icon