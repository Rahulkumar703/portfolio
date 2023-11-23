import ExplorerNavigation from "./ExplorerNavigation"

const Addressbar = () => {
    return (
        <div
            className="bg-tab p-1 flex gap-3"
            onPointerDownCapture={e => e.stopPropagation()}
        >
            <ExplorerNavigation />
        </div>
    )
}
export default Addressbar