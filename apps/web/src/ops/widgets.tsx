/** Shared ops widgets - premium exec aesthetic: mono numbers, hairline grouping, diffusion shadow. */
import { motion } from "framer-motion";
import type { KpiTile } from "../api/types";
import { Info } from "@phosphor-icons/react";

export function OpsCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-[20px] border border-black/[0.04] bg-white p-7 " +
        "shadow-[0_2px_16px_rgba(0,0,0,0.04)] " +
        className
      }
    >
      {children}
    </div>
  );
}

export function Kpi({ tile, flash }: { tile: KpiTile; flash?: boolean }) {
  const trendColor =
    tile.trend === "up" ? "text-[#34C759]" : tile.trend === "down" ? "text-[#FF3B30]" : "text-[#8E8E93]";
  return (
    <div className="flex flex-col gap-1.5 border-l border-black/[0.06] pl-5 first:border-l-0 first:pl-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-[#8E8E93]">{tile.label}</span>
      <motion.span
        key={tile.value}
        initial={flash ? { backgroundColor: "rgba(52,199,89,0.15)" } : false}
        animate={{ backgroundColor: "rgba(52,199,89,0)" }}
        transition={{ duration: 1.2 }}
        className="rounded-md text-3xl font-bold tracking-tight text-[#1C1C1E]"
      >
        {tile.value}
      </motion.span>
      {tile.delta && <span className={"text-sm font-semibold " + trendColor}>{tile.delta}</span>}
    </div>
  );
}

export function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mb-7 border-b border-black/[0.04] pb-4">
      <div className="text-xs font-bold uppercase tracking-widest text-[#007AFF]">
        {eyebrow}
      </div>
      <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#1C1C1E]">{title}</h2>
      {desc && (
        <div className="mt-2 text-sm leading-relaxed text-[#8E8E93]">
          {desc}
        </div>
      )}
    </div>
  );
}
