import Icon from "../client/Icon";

const Desktop = () => {

    const Icons = [
        {
            icon: '/icons/Computer.svg',
            label: 'This PC',
            url: '/explorer/'
        },
        {
            icon: '/icons/user.png',
            label: 'About Me',
            url: '/explorer/AboutMe'
        },
    ]

    return (
        <main
            className={`flex flex-col flex-wrap gap-4 items-start content-start pb-14 w-full h-screen relative py-1 px-[2px] flex-1 overflow-hidden  bg-[url('/wallpaper/img18.webp')] dark:bg-[url('/wallpaper/img19.webp')] bg-cover bg-center select-none`}>
            {
                Icons.map((icon, index) => {
                    return (
                        <Icon {...icon} key={index} />
                    )
                })
            }
        </main>
    )
}
export default Desktop