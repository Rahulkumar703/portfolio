import TaskbarIcon from "./TaskbarIcon";

const Taskbar = () => {
  return (
    <footer className="z-50 flex items-center w-full h-12 bg-glass backdrop-blur-2xl border-t absolute bottom-0">
      <div className="flex gap-1 mx-auto">
        <TaskbarIcon icon="/icons/startButton.png" alt="start" href="" />
        <TaskbarIcon
          icon="/icons/fileExplorer.png"
          alt="explorer"
          href="/explorer"
        />
      </div>
    </footer>
  );
};
export default Taskbar;
