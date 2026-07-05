/**
 * AI Observability (BUILD_PROMPT §12). Hallucination attempts contained, policy violations prevented,
 * retrieval failures, accept/reject, and confidence evolution. Reads the live audit store.
 */
import { motion } from "framer-motion";
import type { ObservabilityResponse } from "../api/types";
import { OpsCard, SectionTitle } from "./widgets";

function Stat({ label, value, accent }: { label: string; value: number | string; accent: string }) {
  return (
    <div className="flex flex-col gap-1 border-l border-black/[0.06] pl-5">
      <span className="text-xs font-semibold uppercase tracking-wider text-[#8E8E93]">{label}</span>
      <span className={"text-[32px] font-bold tracking-tight " + accent}>{value}</span>
    </div>
  );
}

export function ObservabilityView({ data, pulse }: { data: ObservabilityResponse | null; pulse: number }) {
  if (!data) return <div className="ai-shimmer h-72 rounded-3xl" />;
  const evo = data.confidence_evolution;
  const max = Math.max(...evo, 1);

  return (
    <div className="flex flex-col gap-8">
      <OpsCard>
        <SectionTitle 
          eyebrow="Trust & safety" 
          title="AI Observability" 
          desc="Ensures the AI operates strictly within policy boundaries. Tracks real-time hallucination containment and automated policy enforcement."
        />
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          <Stat label="Hallucinations caught" value={data.hallucinations_contained} accent="text-[#34C759]" />
          <Stat label="Policies enforced" value={data.policy_violations_prevented} accent="text-[#007AFF]" />
          <Stat label="Retrieval fail-closed" value={data.retrieval_failures} accent="text-[#FF9F0A]" />
          <motion.div key={pulse} initial={{ scale: pulse ? 1.06 : 1 }} animate={{ scale: 1 }}>
            <Stat label="Accept rate" value={`${Math.round(data.accept_rate * 100)}%`} accent="text-[#1C1C1E]" />
          </motion.div>
        </div>
      </OpsCard>

      <div className="grid gap-6 lg:grid-cols-2">
        <OpsCard>
          <SectionTitle 
            eyebrow="Calibration" 
            title="Confidence Engine" 
            desc="Live model certainty score. The spine silently fails-closed (renders nothing) if certainty drops below the 0.70 threshold."
          />
          <div className="flex h-36 items-end gap-1.5 border-b border-black/[0.04] pb-2">
            {evo.map((c, i) => (
              <div key={i} className="group relative flex flex-1 flex-col items-center justify-end gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: Math.max(12, (c / max) * 110) }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 120, damping: 20 }}
                  className="w-full rounded-md bg-[#007AFF] opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <span className="font-mono text-[10px] text-[#8E8E93]">{c.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </OpsCard>

        <OpsCard>
          <SectionTitle 
            eyebrow="Decision ledger" 
            title="Accept vs Reject" 
            desc="Tracks human-in-the-loop interventions. The proposing chain (AI) is decoupled from the executing gate (Human). Nothing touches money without a confirm."
          />
          <div className="flex flex-col gap-5 mt-2">
            <LedgerRow label="Accepted (confirmed)" value={data.recommendations_accepted} total={Math.max(1, data.recommendations_accepted + data.recommendations_rejected)} cls="bg-[#34C759]" />
            <LedgerRow label="Declined by human" value={data.recommendations_rejected} total={Math.max(1, data.recommendations_accepted + data.recommendations_rejected)} cls="bg-[#8E8E93]" />
            <LedgerRow label="Blocked pre-author" value={data.policy_violations_prevented + data.hallucinations_contained} total={Math.max(1, data.policy_violations_prevented + data.hallucinations_contained)} cls="bg-[#FF3B30]" />
          </div>
        </OpsCard>
      </div>
    </div>
  );
}

function LedgerRow({ label, value, total, cls }: { label: string; value: number; total: number; cls: string }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-[#8E8E93]">{label}</span>
        <span className="font-bold text-[#1C1C1E]">{value}</span>
      </div>
      <div className="h-[6px] overflow-hidden rounded-full bg-[#E5E5EA]">
        <div className={"h-full rounded-full " + cls} style={{ width: `${(value / total) * 100}%` }} />
      </div>
    </div>
  );
}
