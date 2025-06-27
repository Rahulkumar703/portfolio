"use client";

import { encode } from "qss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type LinkPreviewProps = {
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

const LinkPreview = ({
  url,
  className = "",
  width = 400,
  height = 400,
  quality = 70,
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  let src: string;

  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
      "screenshot.quality": quality,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`bg-glass relative${className}`}
    >
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          width={width}
          height={height}
          className="rounded-lg relative w-full min-w-96"
          alt="Link Preview"
          style={{ display: "block" }}
        />
      </Link>
    </motion.div>
  );
};

export default LinkPreview;
