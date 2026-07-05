/**
 * Adoption Barrier Twin (BUILD_PROMPT §12). A users→friction-node graph with cohort shares
 * (aggregated / anonymised → DPDP-clean). Rendered as an SVG hub-and-spoke; node size ∝ cohort share.
 */
import { motion } from "framer-motion";
import type { BarrierResponse } from "../api/types";
import { OpsCard, SectionTitle } from "./widgets";

export function BarrierTwinView({ data }: { data: BarrierResponse | null }) {
  if (!data) return <div className="ai-shimmer h-72 rounded-3xl" />;
  const cx = 170;
  const cy = 170;
  const n = data.nodes.length;

  return (
    <OpsCard>
      <SectionTitle 
        eyebrow="Friction intelligence" 
        title="Adoption Barrier Twin" 
        desc="Aggregates anonymized telemetry to identify structural friction points. Larger nodes indicate a higher cohort share experiencing the friction, allowing executives to prioritize UX/UI interventions."
      />
      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
        {/* hub-and-spoke svg */}
        <div className="flex justify-center w-full overflow-x-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          <svg viewBox="0 0 340 340" className="w-[340px] shrink-0">
            {data.nodes.map((node, i) => {
              const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
              const x = cx + 110 * Math.cos(angle);
              const y = cy + 110 * Math.sin(angle);
              const r = 14 + node.cohort_share * 60;
              return (
                <g key={node.node_id}>
                  <line x1={cx} y1={cy} x2={x} y2={y} stroke="#E5E5EA" strokeWidth={1} />
                  <motion.circle
                    cx={x} cy={y} r={r}
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ delay: i * 0.07, type: "spring", stiffness: 160, damping: 18 }}
                    fill="rgba(0,122,255,0.1)" stroke="#007AFF" strokeWidth={1.5}
                  />
                  <text x={x} y={y} textAnchor="middle" dominantBaseline="middle"
                    className="fill-[#1C1C1E] font-mono text-xs font-semibold">
                    {Math.round(node.cohort_share * 100)}%
                  </text>
                </g>
              );
            })}
            <circle cx={cx} cy={cy} r={32} fill="white" stroke="#E5E5EA" strokeWidth={1} />
            <circle cx={cx} cy={cy} r={28} fill="#F2F2F7" />
            <text x={cx} y={cy - 2} textAnchor="middle" className="fill-[#8E8E93] text-[11px] font-bold tracking-widest">USERS</text>
            <text x={cx} y={cy + 12} textAnchor="middle" className="fill-[#1C1C1E] font-mono text-[13px] font-bold">
              {data.total_users.toLocaleString("en-IN")}
            </text>
          </svg>
        </div>

        {/* ranked list */}
        <div className="divide-y divide-black/[0.04] border-t border-black/[0.04] lg:border-t-0 lg:border-l lg:pl-6">
          {data.nodes.map((node, i) => (
            <motion.div
              key={node.node_id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 py-3 group hover:bg-black/[0.02] rounded-lg px-2 -mx-2 transition-colors"
            >
              <span className="font-mono text-sm text-[#8E8E93]">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1">
                <div className="text-[15px] font-semibold text-[#1C1C1E]">{node.label}</div>
                <div className="text-xs font-medium uppercase tracking-wider text-[#8E8E93] mt-0.5">
                  SRC: {node.screen} - SEV: {node.severity.toFixed(2)}
                </div>
              </div>
              <div className="w-24">
                <div className="h-[6px] overflow-hidden rounded-full bg-[#E5E5EA]">
                  <div className="h-full rounded-full bg-[#007AFF]" style={{ width: `${node.cohort_share * 100}%` }} />
                </div>
              </div>
              <span className="w-12 text-right font-mono text-[13px] font-bold text-[#1C1C1E]">
                {Math.round(node.cohort_share * 100)}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </OpsCard>
  );
}
