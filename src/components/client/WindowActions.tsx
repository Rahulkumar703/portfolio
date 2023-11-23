"use client"
import { useRouter } from 'next/navigation'
import { FiMinus, FiSquare, FiX } from 'react-icons/fi'

const WindowActions = () => {

    const router = useRouter();

    const closeWindow = () => {
        router.push('/');
    }
    const minimiseWindow = () => {
        router.push('/');
    }
    const toggleMaximiseWindow = () => {
    }

    return (
        <div
            className="ml-auto flex items-start absolute right-0 top-0 h-8"
            onPointerDownCapture={e => e.stopPropagation()}
        >
            <div
                className="hover:bg-hoverDark hover:shadow-md ease-in-out rounded-b-sm  p-1 w-12 h-full px-3 grid place-items-center transition-all"
                onClick={minimiseWindow}
            >
                <FiMinus size={16} />
            </div>
            <div
                className="hover:bg-hoverDark hover:shadow-md ease-in-out rounded-b-sm  p-1 w-12 h-full px-3 grid place-items-center transition-all"
                onClick={toggleMaximiseWindow}
            >
                <FiSquare size={12} />
            </div>
            <div
                className="hover:bg-destructive hover:shadow-md ease-in-out rounded-bl-sm p-1 w-12 h-full px-3 grid place-items-center transition-all"
                onClick={closeWindow}
            >
                <FiX size={16} />
            </div>
        </div>
    )
}
export default WindowActions