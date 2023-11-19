import ExplorerTitle from "@/components/client/ExplorerTitle"

const ThisPCPage = () => {

    const icon = '/icons/Computer.svg'
    const title = 'This PC'

    return (
        <div className="">
            <ExplorerTitle icon={icon} title={title} />
        </div>
    )
}
export default ThisPCPage