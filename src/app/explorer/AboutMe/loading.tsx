"use client"
import ExplorerTitle from "@/components/client/ExplorerTitle"

const Loading = () => {
    const icon = '/icons/user.png'
    const title = 'About Me'

    return (
        <div className="">
            <ExplorerTitle icon={icon} title={title} />
        </div>
    )
}

export default Loading