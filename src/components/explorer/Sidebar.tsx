"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

const Sidebar = () => {
  const tabs = useMemo(() => {
    return [
      { id: 1, name: "Home", href: "/explorer", icon: "/icons/Computer.svg" },
      {
        name: "Education",
        href: "/explorer/education",
        icon: "/icons/folder.png",
      },
      {
        name: "Skills",
        href: "/explorer/skills",
        icon: "/icons/folder.png",
      },
      {
        name: "Experiences",
        href: "/explorer/experiences",
        icon: "/icons/folder.png",
      },
      {
        name: "Projects",
        href: "/explorer/projects",
        icon: "/icons/folder.png",
      },
      {
        name: "Resume",
        href: "/explorer/resume",
        icon: "/icons/folder.png",
      },
      {
        name: "Certifications",
        href: "/explorer/certificates",
        icon: "/icons/folder.png",
      },
    ];
  }, []);

  return (
    <div className="w-56 flex flex-col gap-1 h-[calc(100vh-135px)] bg-background p-4 border-r">
      {tabs.map((tab, index) => {
        if (index === 1) {
          return (
            <React.Fragment key={index}>
              <div className="border-b my-2" />
              <SidebarTabs tab={tab} />
            </React.Fragment>
          );
        }
        return <SidebarTabs key={index} tab={tab} />;
      })}
    </div>
  );
};

const SidebarTabs = ({
  tab,
}: {
  tab: { name: string; href: string; icon: string };
}) => {
  const pathname = usePathname();
  const isActive = pathname === tab.href;
  const activeClass = isActive
    ? "bg-hover text-text-hover"
    : "text-text hover:text-text-hover";
  return (
    <Link
      href={tab.href}
      className={`flex items-center py-1 px-2 hover:bg-hover gap-2 rounded transition-all text-sm font-medium ${activeClass}`}
    >
      <Image
        width={16}
        height={16}
        src={tab.icon}
        alt={tab.name}
        className="w-4 h-4 mt-0.5 select-none pointer-events-none"
      />
      {tab.name}
    </Link>
  );
};

export default Sidebar;
