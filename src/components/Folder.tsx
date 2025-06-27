import Image from "next/image";
import Link from "next/link";

const Folder = ({
  name,
  href,
  className,
}: {
  name: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`group flex flex-col items-center justify-center gap-2 p-2 rounded-md hover:bg-muted transition-colors min-w-fit ${className}`}
    >
      <Image
        src="/icons/folder.png"
        width={48}
        height={48}
        alt="Folder Icon"
        className="w-12 h-12"
      />
      <div className="flex items-center group-hover:underline">{name}</div>
    </Link>
  );
};

export default Folder;
