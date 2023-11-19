"use client"
import { DAYS, MONTHS } from "@/lib/utils"
import { ChildrenType, WindowsStateType } from "../types/types"
import WindowsContex from "./WindowsContext"
import { useEffect, useState } from "react"

const WinowsProvider = ({ children }: ChildrenType) => {

    let DATE = new Date();

    const [WindowsState, setWindowsState] = useState<WindowsStateType>({
        batteryPercentage: 42,
        locked: true,
        nightLight: false,
        volumeLevel: 80,
        fullScreen: false,
        dateTime: {
            day: DAYS[DATE.getDay()],
            month: MONTHS[DATE.getMonth()],
            date: DATE.getDate(),
            hours: (DATE.getHours() > 9 ? DATE.getHours().toString() : '0' + DATE.getHours()),
            minutes: DATE.getMinutes() > 9 ? DATE.getMinutes().toString() : '0' + DATE.getMinutes(),
            seconds: DATE.getSeconds() > 9 ? DATE.getSeconds().toString() : '0' + DATE.getSeconds(),
        }
    });


    useEffect(() => {
        const updateTime = () => {
            DATE = new Date();
            setWindowsState(prev => ({
                ...prev,
                dateTime: {
                    day: DAYS[DATE.getDay()],
                    month: MONTHS[DATE.getMonth()],
                    date: DATE.getDate(),
                    hours: (DATE.getHours() > 9 ? DATE.getHours().toString() : '0' + DATE.getHours()),
                    minutes: DATE.getMinutes() > 9 ? DATE.getMinutes().toString() : '0' + DATE.getMinutes(),
                    seconds: DATE.getSeconds() > 9 ? DATE.getSeconds().toString() : '0' + DATE.getSeconds(),
                }
            }))
        }
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval)

    }, [])


    return (
        <WindowsContex.Provider value={{ WindowsState, setWindowsState }}>
            {children}
        </WindowsContex.Provider>
    )
}
export default WinowsProvider