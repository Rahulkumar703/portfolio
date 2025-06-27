"use client";
import { ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

const Group = ({
  children,
  title,
  description,
  className = "",
  isExpanded = true,
}: {
  children: ReactNode;
  title: string;
  description?: string;
  className?: string;
  isExpanded?: boolean;
}) => {
  const [expanded, setExpanded] = useState(isExpanded);

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <div
        onClick={() => setExpanded((prev) => !prev)}
        className="flex justify-between items-center p-2 cursor-pointer"
      >
        <div className="flex flex-col pr-6">
          <h2 className="text-lg font-bold">{title}</h2>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <ChevronRight
          className={`transition-transform ${
            expanded ? "-rotate-90" : "rotate-90"
          }`}
        />
      </div>

      <motion.div
        className="overflow-hidden p-2 border-b"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: 1,
          height: expanded ? "auto" : 0,
          padding: expanded ? "8px" : 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Group;
