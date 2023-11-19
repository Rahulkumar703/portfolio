import { twMerge } from "tailwind-merge"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={twMerge(`flex gap-1 px-9 py-[6px] text-sm rounded-md bg-white/25 font-semibold backdrop-blur-sm border-[2.5px] border-white/0 hover:border-white focus:border-white transition-all cursor-default focus:ring-1 focus:ring-offset-1 outline-none  ${className}`)}
            {...props}
        >
            {children}
        </button>
    )
}
export default Button