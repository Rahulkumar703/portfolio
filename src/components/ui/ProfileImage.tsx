import Image from "next/image"

interface ProfileImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
}

const ProfileImage = ({ className }: ProfileImageProps) => {
    return (
        <Image
            src="/me.png"
            width={300}
            height={300}
            alt='profilePic'
            className={`w-40 h-40 rounded-full shadow-md object-cover ${className}`}
        />
    )
}
export default ProfileImage