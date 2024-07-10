'use client';
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react";
const Sidebar = () => {


    const [activeIndex, setActiveIndex] = useState<[null | number, null | number]>([null, null]);

    const paths = [
        [
            {
                name: 'Desktop',
                icon: '/icons/Computer.svg',
                href: '/explorer',
                subPaths: [
                    {
                        name: 'About Me',
                        icon: '/icons/user.png',
                        href: '/explorer/about'
                    },
                    {
                        name: 'Projects',
                        icon: '/icons/projects.svg',
                        href: '/explorer/projects'
                    },
                    {
                        name: 'Contact',
                        icon: '/icons/contact.svg',
                        href: '/explorer/contact'
                    }
                ]
            },
            {
                name: 'This PC',
                icon: '/icons/Computer.svg',
                href: '/explorer',
            },
        ]
    ]

    const handleExpand = (i: number, j: number) => {
        if (activeIndex[0] === i && activeIndex[1] === j)
            setActiveIndex([null, null])
        else setActiveIndex([i, j])
    }

    return (
        <aside className="w-1/3 bg-glass min-w-min max-w-xs">
            <div className="flex flex-col gap-4">
                {paths.map((path, i) => (
                    <ul key={i} className="flex flex-col gap-1">
                        {path.map((p, j) => (
                            <li key={j}>
                                <Link href={p.href} className="flex flex-col">
                                    <div className="flex items-center gap-2 p-2">
                                        <ChevronRight size={16} className={p?.subPaths ? 'visible' : 'invisible'} onClick={() => handleExpand(i, j)} />

                                        <img src={p.icon} alt={p.name} className="w-6 h-6" />
                                        <span>{p.name}</span>
                                    </div>
                                    <ul className="pl-10">
                                        {activeIndex[0] === i && activeIndex[1] === j && p?.subPaths ? p.subPaths.map((subPath, k) => (
                                            <li key={k}>
                                                <Link href={subPath.href} className="flex items-center gap-2 p-2 hover:bg-hover transition rounded">
                                                    <img src={subPath.icon} alt={subPath.name} className="w-6 h-6" />
                                                    <span>{subPath.name}</span>
                                                </Link>
                                            </li>
                                        )) : null
                                        }
                                    </ul>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </aside>

    )
}

export default Sidebar
