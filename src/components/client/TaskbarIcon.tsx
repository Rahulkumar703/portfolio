"use client"
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TaskbarIconsType } from '@/types/types'

const TaskbarIcon = ({ icon, alt }: TaskbarIconsType) => {
    return (
        <AnimatePresence>
            <motion.section
                className='w-10 h-10 p-2 hover:bg-white/5 rounded border-t-[1px] border-l-[1px] hover:border-gray-50/5 border-gray-50/0 transition-all ease-in'
                initial={{ scale: .5, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'tween', ease: 'easeIn', duration: .3 }}
            >
                <Image
                    src={icon}
                    width={100}
                    height={100}
                    alt={alt}
                    className='w-full h-auto'
                />
            </motion.section>
        </AnimatePresence>
    )
}

export default TaskbarIcon