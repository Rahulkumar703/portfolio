"use client";
import { DAYS, MONTHS } from "@/lib/utils";
import { ChildrenType, WindowsStateType } from "../types/types";
import WindowsContex from "./WindowsContext";
import { useEffect, useRef, useState } from "react";

const WinowsProvider = ({ children }: ChildrenType) => {
  let DATE = useRef(new Date());

  const [WindowsState, setWindowsState] = useState<WindowsStateType>({
    batteryPercentage: 42,
    locked: false,
    nightLight: false,
    volumeLevel: 80,
    fullScreen: false,
    dateTime: {
      day: DAYS[DATE.current.getDay()],
      month: MONTHS[DATE.current.getMonth()],
      date: DATE.current.getDate(),
      hours:
        DATE.current.getHours() > 9
          ? DATE.current.getHours().toString()
          : "0" + DATE.current.getHours(),
      minutes:
        DATE.current.getMinutes() > 9
          ? DATE.current.getMinutes().toString()
          : "0" + DATE.current.getMinutes(),
      seconds:
        DATE.current.getSeconds() > 9
          ? DATE.current.getSeconds().toString()
          : "0" + DATE.current.getSeconds(),
    },
  });

  useEffect(() => {
    const updateTime = () => {
      DATE.current = new Date();
      setWindowsState((prev) => ({
        ...prev,
        dateTime: {
          day: DAYS[DATE.current.getDay()],
          month: MONTHS[DATE.current.getMonth()],
          date: DATE.current.getDate(),
          hours:
            DATE.current.getHours() > 9
              ? DATE.current.getHours().toString()
              : "0" + DATE.current.getHours(),
          minutes:
            DATE.current.getMinutes() > 9
              ? DATE.current.getMinutes().toString()
              : "0" + DATE.current.getMinutes(),
          seconds:
            DATE.current.getSeconds() > 9
              ? DATE.current.getSeconds().toString()
              : "0" + DATE.current.getSeconds(),
        },
      }));
    };
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <WindowsContex.Provider value={{ WindowsState, setWindowsState }}>
      {children}
    </WindowsContex.Provider>
  );
};
export default WinowsProvider;
