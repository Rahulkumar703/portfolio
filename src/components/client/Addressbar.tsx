import { FiArrowLeft, FiArrowRight, FiArrowUp } from "react-icons/fi"

const Addressbar = () => {
    return (
        <div
            className="bg-tab p-1 flex gap-3"
            onPointerDownCapture={e => e.stopPropagation()}
        >
            <div className="p-2 hover:bg-hover transition-all rounded">
                <FiArrowLeft />
            </div>
            <div className="p-2 hover:bg-hover transition-all rounded">
                <FiArrowRight />
            </div>
            <div className="p-2 hover:bg-hover transition-all rounded">
                <FiArrowUp />
            </div>
        </div>
    )
}
export default Addressbar