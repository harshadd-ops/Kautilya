/**
 * /ops - the executive surface (DESIGN.md §9.4 desktop 3-pane; BUILD_PROMPT §12). Rail + content.
 * The funnel ticks live from the WS stream the instant a nudge is confirmed on the phone.
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChartLineUp, Gauge } from "@phosphor-icons/react";
import { PhIcon } from "../lib/icons";
import { ActivationView } from "./ActivationView";
import { AdminView } from "./AdminView";
import { BarrierTwinView } from "./BarrierTwinView";
import { ObservabilityView } from "./ObservabilityView";
import { useOps } from "./useOps";

const NAV = [
  { key: "activation", label: "Activation", icon: "TrendUp" },
  { key: "barriers", label: "Barrier Twin", icon: "ChartPieSlice" },
  { key: "observability", label: "AI Observability", icon: "ShieldCheck" },
  { key: "admin", label: "Admin", icon: "Sliders" },
] as const;

type View = (typeof NAV)[number]["key"];

export function OpsApp() {
  const [view, setView] = useState<View>("activation");
  const { activation, barriers, obs, pulse } = useOps();

  return (
    <div className="min-h-[100dvh] bg-[#F2F2F7] text-[#1C1C1E] overflow-x-hidden">
      <div className="mx-auto flex w-full">
        {/* rail (hidden on mobile, we use a top bar instead) */}
        <aside className="sticky top-0 hidden h-[100dvh] w-64 shrink-0 flex-col border-r border-black/[0.06] bg-[#F2F2F7] px-4 py-8 lg:flex">
          <div className="flex items-center gap-3 px-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#007AFF] text-white shadow-sm">
              <Gauge size={20} weight="fill" />
            </span>
            <div className="leading-tight">
              <div className="text-[15px] font-semibold tracking-tight text-[#1C1C1E]">DAIE - Ops</div>
              <div className="text-xs font-medium text-[#8E8E93]">Executive Console</div>
            </div>
          </div>

          <nav className="mt-8 flex flex-col gap-1">
            {NAV.map((n) => (
              <button
                key={n.key}
                onClick={() => setView(n.key)}
                className={
                  "flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-sm font-medium transition-colors " +
                  (view === n.key ? "bg-black/[0.06] text-[#1C1C1E] font-semibold" : "text-[#8E8E93] hover:bg-black/[0.03] hover:text-[#1C1C1E]")
                }
              >
                <PhIcon name={n.icon} size={18} weight={view === n.key ? "fill" : "regular"} className={view === n.key ? "text-[#007AFF]" : ""} />
                {n.label}
              </button>
            ))}
          </nav>

          <Link
            to="/app/home"
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-4 py-2.5 text-sm font-semibold text-[#1C1C1E] shadow-[0_1px_4px_rgba(0,0,0,0.05)] border border-black/[0.04] transition-colors hover:bg-gray-50"
          >
            <ChartLineUp size={16} weight="bold" className="text-[#007AFF]" /> Back to App
          </Link>
        </aside>

        {/* content */}
        <main className="min-w-0 flex-1 px-4 py-6 md:px-8 md:py-8">
          <header className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight text-[#1C1C1E]">
                  {NAV.find((n) => n.key === view)?.label}
                </h1>
                <Link
                  to="/app/home"
                  className="rounded-full bg-[#007AFF] px-4 py-1.5 text-sm font-semibold text-white shadow-sm lg:hidden"
                >
                  App
                </Link>
              </div>
              <p className="mt-1 text-sm font-medium text-[#8E8E93]">
                Data stream: SYNTHETIC - End-to-end encrypted
              </p>
            </div>
            {/* Mobile Nav Scroller */}
            <nav className="flex overflow-x-auto hide-scrollbar gap-2 lg:hidden pb-2 -mx-4 px-4">
              {NAV.map((n) => (
                <button
                  key={n.key}
                  onClick={() => setView(n.key)}
                  className={
                    "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors border " +
                    (view === n.key ? "bg-[#1C1C1E] text-white border-[#1C1C1E]" : "bg-white text-[#8E8E93] border-black/[0.06]")
                  }
                >
                  {n.label}
                </button>
              ))}
            </nav>
          </header>

          {view === "activation" && <ActivationView data={activation} pulse={pulse} />}
          {view === "barriers" && <BarrierTwinView data={barriers} />}
          {view === "observability" && <ObservabilityView data={obs} pulse={pulse} />}
          {view === "admin" && <AdminView />}
        </main>
      </div>
    </div>
  );
}
