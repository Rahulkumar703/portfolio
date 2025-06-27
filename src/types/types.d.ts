import { DragControls, MotionValue } from "framer-motion";

export type ChildrenType = {
  children: React.ReactNode;
};
export type IconType = {
  icon: string;
  label: string;
  url: string;
};
export type ExplorerHeaderType = {
  icon: string;
  title: string;
  controls: DragControls;
  explorerRef: React.RefObject<HTMLElement>;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

export type WindowsContexType = {
  WindowsState: WindowsStateType;
  setWindowsState: React.Dispatch<React.SetStateAction<WindowsStateType>>;
};

export type WindowsStateType = {
  batteryPercentage: number;
  volumeLevel: number;
  nightLight: boolean;
  locked: boolean;
  fullScreen: boolean;
  dateTime: {
    day: string;
    month: string;
    date: number;
    hours: string;
    minutes: string;
    seconds: string;
  };
};

type TaskbarIconsType = {
  icon: string;
  alt: string;
  href: string;
};
