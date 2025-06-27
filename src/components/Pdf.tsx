"use client";

import dynamic from "next/dynamic";

export const Pdf = dynamic(() => import("./RenderPdf"), { ssr: false });
