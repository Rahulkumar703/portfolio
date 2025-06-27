"use client";
import { MotionValue } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FiMinus, FiSquare, FiX } from "react-icons/fi";

const ActionsBtns = ({
  explorerRef,
  x,
  y,
}: {
  explorerRef: React.RefObject<HTMLElement>;
  x: MotionValue<number>;
  y: MotionValue<number>;
}) => {
  const router = useRouter();
  const [maximised, setMaximised] = useState(true);

  const closeWindow = () => {
    router.push("/");
  };
  const minimiseWindow = () => {
    router.push("/");
  };
  const toggleMaximiseWindow = useCallback(() => {
    if (!explorerRef.current) return;
    const width = window.innerWidth * 0.66;
    const height = window.innerHeight * 0.66;
    if (maximised) {
      setMaximised(false);
      explorerRef.current.classList.remove("w-full");
      explorerRef.current.classList.add("w-2/3");
      explorerRef.current.classList.remove("h-[calc(100vh-48px)]");
      explorerRef.current.classList.add("h-2/3");
      x.set((window.innerWidth - width) / 2);
      y.set((window.innerHeight - height) / 2 - 48);
    } else {
      setMaximised(true);
      x.set(0);
      y.set(0);
      explorerRef.current.classList.remove("w-2/3");
      explorerRef.current.classList.add("w-full");
      explorerRef.current.classList.remove("h-2/3");
      explorerRef.current.classList.add("h-[calc(100vh-48px)]");
      explorerRef.current.classList.add("m-0");
    }
  }, [explorerRef, x, y, maximised]);

  return (
    <div
      className="ml-auto flex items-start absolute right-0 top-0 h-8"
      onPointerDownCapture={(e) => e.stopPropagation()}
    >
      <div
        className="hover:bg-hoverDark hover:shadow-md ease-in-out rounded-b-sm  p-1 w-12 h-full px-3 grid place-items-center transition-all"
        onClick={minimiseWindow}
      >
        <FiMinus size={16} />
      </div>
      <div
        className="hover:bg-hoverDark hover:shadow-md ease-in-out rounded-b-sm  p-1 w-12 h-full px-3 grid place-items-center transition-all"
        onClick={toggleMaximiseWindow}
      >
        {maximised ? (
          <div className="relative">
            <FiSquare size={16} className="relative z-10 bg-inherit" />
            <FiSquare
              size={16}
              className="absolute -z-10 right-[-2px] top-[-2px]"
            />
          </div>
        ) : (
          <FiSquare size={12} />
        )}
      </div>
      <div
        className="hover:bg-destructive hover:shadow-md ease-in-out rounded-bl-sm p-1 w-12 h-full px-3 grid place-items-center transition-all"
        onClick={closeWindow}
      >
        <FiX size={16} />
      </div>
    </div>
  );
};
export default ActionsBtns;
