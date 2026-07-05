/**
 * <AIInsightCard> - DESIGN.md §8.2 primary AI surface. ✦ identifier, title, body, Review +
 * Dismiss, "Why am I seeing this?" (info), thumbs feedback (§8.5). Left 4dp accent bar pulses
 * on first appear. Purple is exclusive to AI (§8.3 Rule 5). Confidence < 0.7 ⇒ never rendered
 * (gated upstream by the spine).
 */
import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { AiContent } from "../../api/types";
import { Info, PhIcon, Sparkle, X } from "../../lib/icons";
import { aiCardEnter } from "../../lib/motion";

export function AIInsightCard({
  content,
  confidence,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
  onDismiss,
  onWhy,
  compact,
}: {
  content: AiContent;
  confidence: number;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary: () => void;
  onSecondary?: () => void;
  onDismiss?: () => void;
  onWhy?: () => void;
  compact?: boolean;
}) {
  const [vote, setVote] = useState<"up" | "down" | null>(null);
  return (
    <motion.section
      variants={aiCardEnter}
      initial="hidden"
      animate="show"
      exit="exit"
      aria-label={`AI insight: ${content.title}. ${content.body}`}
      className="relative overflow-hidden rounded-[20px] border-l-[6px] border-y border-r border-y-slate-200 border-r-slate-200 border-l-ai bg-white p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)]"
    >
      {/* Header Area: Eyebrow + Metadata Pill */}
      <div className="flex items-start justify-between gap-3">
        <span className="flex items-start gap-1.5 text-[11px] font-bold text-ai tracking-[0.08em] uppercase pt-1">
          <Sparkle size={14} weight="fill" className="shrink-0 mt-px" />
          <span className="leading-snug">{content.eyebrow}</span>
        </span>
        
        {/* Metadata Pill: Confidence + Feedback */}
        <div className="shrink-0 flex items-center gap-2 rounded-full bg-slate-50 border border-slate-100 px-2.5 py-1 shadow-sm">
          <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
            {(confidence * 100).toFixed(0)}% Match
          </span>
          <div className="h-3 w-px bg-slate-200" />
          <button
            aria-label="This insight was helpful"
            onClick={() => setVote("up")}
            className={`hover:bg-white rounded-full p-1 transition-colors ${vote === "up" ? "text-emerald-600 bg-emerald-50" : "text-slate-400 hover:text-slate-600"}`}
          >
            <ThumbsUp size={14} weight={vote === "up" ? "fill" : "bold"} />
          </button>
          <button
            aria-label="This insight was not helpful"
            onClick={() => setVote("down")}
            className={`hover:bg-white rounded-full p-1 transition-colors ${vote === "down" ? "text-rose-600 bg-rose-50" : "text-slate-400 hover:text-slate-600"}`}
          >
            <ThumbsDown size={14} weight={vote === "down" ? "fill" : "bold"} />
          </button>
        </div>
      </div>

      {/* Core Content Grid */}
      <div className="mt-5 flex gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] bg-ai/10 text-ai shadow-sm">
          <PhIcon name={content.icon} size={24} weight="duotone" />
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <h3 className="text-[17px] font-bold tracking-tight text-slate-900 leading-snug">
            {content.title}
          </h3>
          {!compact && (
            <p className="mt-2 text-[14.5px] text-slate-600 leading-relaxed font-medium">
              {content.body}
            </p>
          )}
        </div>
      </div>

      {/* Action Area */}
      <div className="mt-6 flex flex-col gap-2">
        <button
          onClick={onPrimary}
          className="w-full flex min-h-[48px] items-center justify-center rounded-[14px] bg-ai px-4 text-[15px] font-bold text-white shadow-md shadow-ai/20 transition-all hover:brightness-110 active:scale-[0.98]"
        >
          {primaryLabel ?? content.primary_cta}
        </button>
        <div className="flex items-center justify-between px-1 mt-1">
          <button
            onClick={onSecondary ?? onDismiss}
            className="px-3 py-2.5 text-[14px] font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
          >
            {secondaryLabel ?? content.secondary_cta}
          </button>
          {onWhy && (
            <button
              onClick={onWhy}
              aria-label="Why am I seeing this?"
              className="flex items-center gap-1.5 px-3 py-2.5 text-[13px] font-bold text-ai hover:bg-ai/10 rounded-xl transition-colors"
            >
              <Info size={16} weight="bold" />
              Why am I seeing this?
            </button>
          )}
        </div>
      </div>
    </motion.section>
  );
}
