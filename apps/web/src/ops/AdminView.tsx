import { useEffect, useState } from "react";
import { OpsCard, SectionTitle } from "./widgets";
import { api } from "../api/client";

const NUDGE_TYPES = [
  "RecommendSIP", "RecommendMicroSIP", "SuggestSeniorFD", "OfferTermCover",
  "ScamShieldAlert", "EscalateToRM",
];

export function AdminView() {
  const [kill, setKill] = useState<Record<string, boolean>>({});
  const [query, setQuery] = useState("");
  const [auditLogs, setAuditLogs] = useState<any[]>([]);
  
  // Consent state for Rajesh
  const [rajeshConsents, setRajeshConsents] = useState<Record<string, boolean>>({
    investment_distribution: true,
    account_analytics: true,
    marketing: false
  });

  useEffect(() => {
    // Fetch live audit logs from SQLite
    api.opsAudit().then(setAuditLogs).catch(console.error);
    
    // Poll every 3 seconds for new logs to keep dashboard live
    const interval = setInterval(() => {
      api.opsAudit().then(setAuditLogs).catch(console.error);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  async function toggleConsent(purpose: string) {
    const current = rajeshConsents[purpose];
    const next = !current;
    setRajeshConsents(prev => ({ ...prev, [purpose]: next }));
    try {
      await api.setConsent("cust_rajesh", purpose, next);
    } catch (e) {
      console.error(e);
      // revert on failure
      setRajeshConsents(prev => ({ ...prev, [purpose]: current }));
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2 p-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8">
        <OpsCard className="shadow-sm hover:shadow-md transition-shadow">
          <SectionTitle eyebrow="Governance" title="Model Register (Live Audit)" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by audit_id, verb, reg_class…"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand mb-4 transition-all"
          />
          <div className="overflow-x-auto rounded-xl border border-slate-100 bg-white">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500 font-semibold border-b border-slate-100">
                <tr>
                  {["audit_id", "verb", "reg_class", "decision"].map((h) => (
                    <th key={h} className="px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-mono text-xs text-slate-700 divide-y divide-slate-50">
                {auditLogs
                  .filter((r) => JSON.stringify(r).toLowerCase().includes(query.toLowerCase()))
                  .map((log, i) => (
                    <tr key={log.event_id || i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3 text-slate-500 truncate max-w-[120px]" title={log.event_id}>{log.event_id}</td>
                      <td className="px-5 py-3 font-medium text-slate-800">{log.verb || "—"}</td>
                      <td className="px-5 py-3 text-slate-500">{log.reg_class || "—"}</td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide ${
                          log.outcome === "rejected" ? "bg-red-50 text-red-700" : 
                          log.outcome === "confirmed" ? "bg-emerald-50 text-emerald-700" : 
                          "bg-blue-50 text-blue-700"
                        }`}>
                          {log.outcome}
                        </span>
                        {log.reason_code && <span className="ml-2 text-[10px] text-slate-400">· {log.reason_code}</span>}
                      </td>
                    </tr>
                  ))}
                {auditLogs.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-5 py-8 text-center text-slate-400">No logs found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </OpsCard>
      </div>

      <div className="flex flex-col gap-8">
        <OpsCard className="shadow-sm">
          <SectionTitle eyebrow="DPDP" title="Customer Consent Toggles (Rajesh)" />
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Live demonstration of the Policy Engine. Toggling these will instantly grant or revoke DPDP consent for Rajesh in the Knowledge Graph, blocking or enabling governed actions.
          </p>
          <div className="flex flex-col gap-4">
            {Object.entries(rajeshConsents).map(([purpose, granted]) => (
              <div key={purpose} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors bg-slate-50/50">
                <span className="font-mono text-sm text-slate-700">{purpose}</span>
                <button
                  onClick={() => toggleConsent(purpose)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 ${
                    granted ? 'bg-emerald-500' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      granted ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </OpsCard>

        <OpsCard className="shadow-sm">
          <SectionTitle eyebrow="Governance" title="Global Kill-switch" />
          <div className="grid grid-cols-2 gap-3 mt-4">
            {NUDGE_TYPES.map((v) => {
              const off = kill[v];
              return (
                <div key={v} className="flex flex-col gap-3 p-4 rounded-xl border border-slate-100 bg-white">
                  <span className="font-mono text-xs text-slate-600 truncate" title={v}>{v}</span>
                  <button
                    onClick={() => setKill((k) => ({ ...k, [v]: !k[v] }))}
                    className={`w-full rounded-lg px-3 py-2 text-xs font-semibold tracking-wide transition-colors ${
                      off ? "bg-red-50 text-red-600 border border-red-100" : "bg-emerald-50 text-emerald-600 border border-emerald-100 hover:bg-emerald-100"
                    }`}
                  >
                    {off ? "DISABLED" : "LIVE"}
                  </button>
                </div>
              );
            })}
          </div>
        </OpsCard>

        <OpsCard className="shadow-sm">
          <SectionTitle eyebrow="Health" title="Engine Status" />
          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            {[
              ["Spine latency p95", "82 ms", "bg-emerald-50 text-emerald-600"],
              ["Explainer", "template · healthy", "bg-emerald-50 text-emerald-600"],
              ["Graph backend", "embedded · in-proc", "bg-blue-50 text-blue-600"],
              ["Audit store", "sqlite · ok", "bg-blue-50 text-blue-600"],
            ].map(([k, v, badgeClass]) => (
              <div key={k} className="flex flex-col gap-1.5">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">{k}</div>
                <div className="flex items-center">
                  <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-mono font-medium ${badgeClass}`}>
                    {v}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </OpsCard>
      </div>
    </div>
  );
}
