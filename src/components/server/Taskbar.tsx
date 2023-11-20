import TaskbarIcon from "../client/TaskbarIcon"

const Taskbar = () => {
    return (
        <footer className="flex items-center w-full h-12 bg-transparent backdrop-blur-3xl border-t-[1px] border-transparent absolute bottom-0">
            <div className="flex gap-1 mx-auto">
                <TaskbarIcon icon="/icons/startButton.png" alt="start" />
                <TaskbarIcon icon="/icons/fileExplorer.png" alt="explorer" />
            </div>
        </footer>
    )
}
export default Taskbar