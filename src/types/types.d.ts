export type ChildrenType = {
    children: React.ReactNode
}
export type IconType = {
    icon: string,
    label: string
    url: string
}
export type ExplorerTitleType = {
    icon: string,
    title: string
}

export type WindowsContexType = {
    WindowsState: WindowsStateType,
    setWindowsState: React.Dispatch<React.SetStateAction<WindowsStateType>>
}

export type WindowsStateType = {
    batteryPercentage: number,
    volumeLevel: number,
    nightLight: boolean,
    locked: boolean,
    fullScreen: boolean,
    dateTime: {
        day: string,
        month: string,
        date: number,
        hours: string,
        minutes: string,
        seconds: string,
    }

}