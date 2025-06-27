import Image, { ImageProps } from "next/image";

const ProfileImage = ({
  className = "",
  src = "/me.jpg",
  alt = "Profile Image",
  ...props
}: ImageProps) => {
  return (
    <Image
      priority
      src={src}
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAAAAXNSR0IArs4c6QAAAUJJREFUKFMlzEsow3EAwPHv77/90fzNNo/mMcSoHUiepZRcHFAiLhR3MaVk1HDBhYsTeUS5uXrMbd5SODFOXLSLsP33XzT9hNPn9hF7BwFptVqxaBqKUDCMGBaL5U89GkEEj49lut2BIgTrS4s8hUIM+afJySsgEvlAnF2cS0dGJlcXlyi3AeoqClg5fWbQP09M1xHXN9fSZncQDYc5XF6guaaI1JJKbNUtRH+Hu9CD1LQ0vr8+2Zkdp6rUhae1E3Ou53+4f3iUqZqGHtVZnZvBk6XSODCKLdtJPG4gjk5O5dbmFvu7AepddprKXWxfvVDf2EBvfx9idMwnN1bXSE5OQTWbMZsUEokEMcOgp7sL0dbeIY+CQUyKCVVVcTqdeEeG8funKHO7EYWFxfL97RUjHkdVk8h35eP1epnwTVJbU80PX8x3FMk62GQAAAAASUVORK5CYII="
      width={300}
      height={300}
      alt={alt}
      placeholder="blur"
      className={`shrink-0 w-40 h-40 rounded-full shadow-md object-cover ${className}`}
      {...props} // ✅ Forward all other props
    />
  );
};

export default ProfileImage;
