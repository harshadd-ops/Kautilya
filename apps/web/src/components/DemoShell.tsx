/**
 * DemoShell - the stage. Left: PersonaSwitcher (the demo control). Centre: the phone (390×844)
 * with persistent bottom nav + AI FAB. Right: the split-screen reasoning inspector (Act 2 -
 * "same governance, different surface"). Everything inside reads the engine; nothing is faked here.
 */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MOCK_MODE } from "../api/client";
import { AIAssistFAB } from "./ai/AIAssistFAB";
import { AIAssistPanel } from "./ai/AIAssistPanel";
import { AdaptiveProvider, useAdaptive } from "../lib/adaptive";
import { ChartLineUp, Gauge } from "@phosphor-icons/react";
import { PersonaSwitcher } from "../persona/PersonaSwitcher";
import { PhoneFrame } from "./PhoneFrame";
import { BottomNavigationBar } from "./organisms/BottomNavigationBar";
import { ReasoningPathInspector } from "./ReasoningPathInspector";
import { useUiStore } from "../store/uiStore";

function Stage() {
  const { profile, nba, loading, error } = useAdaptive();
  const showPath = useUiStore((s) => s.showReasoningPath);
  const demoMode = useUiStore((s) => s.demoMode);
  const toggleDemo = useUiStore((s) => s.toggleDemoMode);
  const [assist, setAssist] = useState(false);

  return (
    <div className="min-h-[100dvh] w-full bg-[#0b1220] text-white">
      {/* stage top bar */}
      <header className="flex flex-col md:flex-row md:items-center justify-between px-8 py-6 gap-6 border-b border-white/5 bg-[#0b1220]/50 backdrop-blur-xl sticky top-0 z-[1000]">
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden">
            <div className="absolute inset-0 bg-black/5 animate-pulse mix-blend-overlay" />
            <img src="/kautilyalogo.png" alt="Kautilya" className="h-10 w-10 object-contain relative z-10" />
          </div>
          <div className="leading-tight">
            <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Kautilya</div>
            <div className="text-xs font-medium tracking-wide text-ai-secondary/80 uppercase mt-1">
              Digital Adoption Intelligence Engine
            </div>
          </div>
          {MOCK_MODE && (
            <span className="ml-2 rounded-full bg-amber-500/20 px-2 py-0.5 text-[11px] text-amber-300">
              MOCK MODE
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/ops"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-[14px] border border-ai/30 bg-ai/10 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(92,53,204,0.15)] transition-all hover:border-ai/60 hover:bg-ai/20 hover:shadow-[0_0_40px_rgba(92,53,204,0.4)] hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[ai-shimmer_1.5s_infinite] transition-opacity duration-300" />
            <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-lg bg-ai-secondary/20 ring-1 ring-ai-secondary/40 group-hover:bg-ai-secondary/30 transition-colors">
              <Gauge size={16} weight="bold" className="text-ai-secondary" /> 
            </div>
            <div className="relative z-10 flex flex-col text-left">
              <span className="tracking-wide">Admin Dashboard</span>
              <span className="text-[10px] uppercase tracking-widest text-ai-secondary/70">Executive Console</span>
            </div>
          </Link>
        </div>
      </header>

      {/* stage body */}
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-start justify-center gap-10 px-8 pb-20 pt-12 lg:flex-nowrap">
        {demoMode && (
          <aside className="order-2 w-full shrink-0 lg:order-1 lg:w-[320px] lg:pt-6">
            <PersonaSwitcher />
          </aside>
        )}

        <main className="relative order-1 lg:order-2">
          <PhoneFrame profile={profile}>
            {error ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-2 p-8 text-center">
                <p className="t-title-sm text-content-primary">Backend unreachable</p>
                <p className="t-body-sm text-content-secondary">
                  Start the API, or run <code className="t-mono">VITE_MOCK=1 pnpm dev</code> for the
                  bundled stage parachute.
                </p>
              </div>
            ) : loading && !profile ? (
              <div className="flex flex-1 items-center justify-center">
                <div className="ai-shimmer h-24 w-24 rounded-full" />
              </div>
            ) : (
              <Outlet />
            )}
            <BottomNavigationBar />
            <AIAssistFAB onClick={() => setAssist(true)} />
            <AIAssistPanel open={assist} onClose={() => setAssist(false)} />
          </PhoneFrame>
        </main>

        <AnimatePresence>
          {showPath && nba && (
            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              className="order-3 w-full shrink-0 self-stretch lg:w-[400px] lg:pt-6"
            >
              <div className="rounded-2xl bg-white p-1">
                {nba.decision === "recommend" ? (
                  <ReasoningPathInspector
                    path={nba.reasoning_path}
                    audit_id={nba.audit_id}
                    confidence={nba.confidence}
                  />
                ) : (
                  <div className="p-5 text-center">
                    <p className="t-title-sm text-content-primary">No action surfaced</p>
                    <p className="mt-1 t-body-sm text-content-secondary">
                      decision = <strong>{nba.decision}</strong>
                      {nba.reason_code ? ` (${nba.reason_code})` : ""} - the spine stayed silent or
                      the policy gate rejected. Nothing renders. That is the guardrail working.
                    </p>
                  </div>
                )}
              </div>
              <p className="mt-3 px-2 text-xs leading-relaxed text-white/45">
                This panel is identical regardless of which persona is active - only the phone's
                surfaced action and its tone change. Governance is constant; presentation adapts.
              </p>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function DemoShell() {
  return (
    <AdaptiveProvider>
      <Stage />
    </AdaptiveProvider>
  );
}
