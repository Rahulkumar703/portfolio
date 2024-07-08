'use client'
import { usePathname, useRouter } from "next/navigation";
import ExplorerNavigation from "./ExplorerNavigation"
import { useRef, useState } from "react";
import { IoReloadOutline } from "react-icons/io5";

const Addressbar = ({ title }: { title: string }) => {
    const router = useRouter();
    const [focused, setFocused] = useState(false);
    const pathname = usePathname();
    const inputRef = useRef<HTMLInputElement>(null);

    const refresh = () => {
        router.refresh();
    }

    const changeRoute = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const path = (e.currentTarget.path as HTMLInputElement).value;
        router.push(path);
        inputRef.current?.blur();
    }

    return (
        <div
            className="bg-tab p-1 flex gap-1"
            onPointerDownCapture={e => e.stopPropagation()}
        >
            <ExplorerNavigation />
            <div className="rounded bg-glass px-2 flex items-center justify-start flex-1" onClick={() => setFocused(true)} >
                {
                    focused ?
                        <form onSubmit={changeRoute}>
                            <input ref={inputRef} autoFocus type="text" name='path' className="bg-transparent text-white w-full outline-none" defaultValue={pathname} onBlur={() => setFocused(false)} />
                        </form>
                        :
                        <p className="text-white">{title}</p>
                }
            </div>
            <button onClick={refresh} className="p-2 flex items-center justify-center bg-glass rounded"><IoReloadOutline /></button>
        </div>
    )
}
export default Addressbar