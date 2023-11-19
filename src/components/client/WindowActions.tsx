"use client"
import { useRouter } from 'next/navigation'
import { FiMinus, FiSquare, FiX } from 'react-icons/fi'

const WindowActions = () => {

    const router = useRouter();

    const closeWindow = () => {
        router.push('/');
    }

    return (
        <div className="ml-auto flex items-start absolute right-0 top-0 h-8">
            <div className="hover:bg-hover p-1 w-12 h-full px-3 grid place-items-center transition-all">
                <FiMinus size={16} />
            </div>
            <div className="hover:bg-hover p-1 w-12 h-full px-3 grid place-items-center transition-all">
                <FiSquare size={12} />
            </div>
            <div className="hover:bg-destructive p-1 w-12 h-full px-3 grid place-items-center transition-all" onClick={closeWindow}>
                <FiX size={16} />
            </div>
        </div>
    )
}
export default WindowActions