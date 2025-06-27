"use client";
import { useContext, useEffect, useState } from "react";
import { ChildrenType } from "../types/types";
import WindowsContex from "@/context/WindowsContext";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./ui/Button";
import ProfileImage from "./ui/ProfileImage";
import { enterFullScreen } from "@/lib/utils";

const LockScreen = ({ children }: ChildrenType) => {
  const { WindowsState, setWindowsState } = useContext(WindowsContex);
  const [passwordScreen, setPasswordScreen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleDrag = (e: DragEvent) => {
    if (e.screenY < 400) {
      setPasswordScreen(true);
      setOpacity(0);
    } else {
      // Calculate the opacity based on the drag position
      const calculatedOpacity = (((e.screenY - 400) / 250) * 100) / 100;
      setOpacity(calculatedOpacity > 1 ? 1 : calculatedOpacity);
    }
  };
  const login = () => {
    setWindowsState((prev) => ({ ...prev, locked: false, fullScreen: true }));
    enterFullScreen();
  };

  if (WindowsState.locked) {
    return (
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute w-full h-screen bg-[url('/wallpaper/img100.webp')] bg-fixed bg-center bg-cover z-50"
      >
        {passwordScreen ? (
          <motion.div
            className="flex items-center justify-center w-full h-screen"
            initial={{
              opacity: 0,
              backdropFilter: "blur(5px)",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              backdropFilter: "blur(20px)",
            }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: "easeOut",
            }}
          >
            <motion.div
              className="flex items-center flex-col -mt-8 text-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="flex flex-col items-center gap-4">
                <ProfileImage src="/me.jpg" alt="Rahul Kumar" />
                <h1 className="text-3xl font-semibold">Rahul Kumar</h1>
              </div>
              <Button className="mt-6" onClick={login}>
                Sign in
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              className="flex gap-2 flex-col items-center justify-center absolute w-full h-screen"
              drag="y"
              dragConstraints={{ left: 0, right: 0, top: -500, bottom: 0 }}
              dragElastic
              whileDrag={{
                opacity: opacity,
                transition: {
                  duration: 0,
                  type: "tween",
                  delay: 0,
                },
              }}
              transition={{
                duration: 0.5,
                type: "tween",
                delay: 0.3,
              }}
              exit={{ opacity: 0, scale: 0 }}
              dragSnapToOrigin
              onDrag={handleDrag}
            >
              {hydrated ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex h-screen gap-2 flex-col items-center justify-center pt-[10%] text-white"
                >
                  <div className="flex gap-1 items-center select-none font-semibold text-9xl">
                    <h1>{WindowsState.dateTime.hours}</h1>
                    <span>:</span>
                    <h1>{WindowsState.dateTime.minutes}</h1>
                  </div>
                  <div className="flex gap-1 items-center font-semibold">
                    {WindowsState.dateTime.day}
                    <span>,</span>
                    {WindowsState.dateTime.month}
                    &nbsp;
                    {WindowsState.dateTime.date}
                  </div>
                  <div className="flex mt-auto pb-[15%] items-center justify-center ">
                    <p className="text-white/60 font-semibold">
                      Drag Up to Unlock
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    );
  } else return children;
};
export default LockScreen;
