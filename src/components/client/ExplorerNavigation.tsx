"use client"
import { usePathname, useRouter } from "next/navigation"
import { FiArrowLeft, FiArrowRight, FiArrowUp } from "react-icons/fi"

const ExplorerNavigation = () => {

    const router = useRouter();
    const pathname = usePathname();

    const goBack = () => {
        const lastSlashIndex = pathname.lastIndexOf('/');
        const newPath = pathname.substring(0, lastSlashIndex);
        router.push(newPath);
    }


    return (
        <>
            <div className="p-2 hover:bg-hover transition-all rounded" onClick={goBack}>
                <FiArrowLeft />
            </div>
            <div className="p-2 hover:bg-hover transition-all rounded">
                <FiArrowRight />
            </div>
            <div className="p-2 hover:bg-hover transition-all rounded">
                <FiArrowUp />
            </div>
        </>
    )
}

export default ExplorerNavigation