/**
 * YONO Shop - real-YONO lifestyle marketplace: shopping, flights, trains, bus, hotels, movies,
 * food, education across 100+ partner merchants.
 * MY AI layer: relevance filter (DESIGN.md pain-point #17) so only contextually-relevant offers show,
 * cutting notification noise. SYNTHETIC.
 */
import { useState, useMemo } from "react";
import { AppBar } from "../components/organisms/AppBar";
import { PhIcon, Sparkle } from "../lib/icons";
import { useAdaptive } from "../lib/adaptive";
import { motion, AnimatePresence } from "framer-motion";

const CATS = [
  { i: "ShoppingCart", l: "Shopping" },
  { i: "TrendUp", l: "Flights" },
  { i: "ArrowsLeftRight", l: "Trains" },
  { i: "House", l: "Hotels" },
  { i: "Gift", l: "Movies" },
  { i: "Storefront", l: "Bus" },
  { i: "GraduationCap", l: "Education" },
  { i: "Handshake", l: "Health" },
];

// Expanded raw offer candidates for rich persona matching
const CANDIDATE_OFFERS = [
  // Student (Aarav is 'young_student' in the backend)
  { id: "e1", cat: "Education", t: "Coursera Plus Trial", m: "1 month free - Upskill", affinity: ["young_student"], signal: "Upskilling goal", icon: "GraduationCap", brand: "text-blue-500 bg-blue-50" },
  { id: "s1", cat: "Food", t: "50% off Zomato", m: "Late night delivery", affinity: ["young_student", "early_career"], signal: "Late night cravings", icon: "ForkKnife", brand: "text-red-500 bg-red-50" },
  { id: "m1", cat: "Movies", t: "Buy 1 Get 1 Free", m: "PVR Cinemas - Weekends", affinity: ["young_student", "early_career"], signal: "Friday evening detected", icon: "Gift", brand: "text-purple-500 bg-purple-50" },
  { id: "s2", cat: "Shopping", t: "Apple Student Discount", m: "MacBooks & iPads", affinity: ["young_student"], signal: "Back to college", icon: "ShoppingCart", brand: "text-slate-700 bg-slate-100" },
  
  // Early Career
  { id: "t1", cat: "Flights", t: "MakeMyTrip 15% off", m: "Domestic flights", affinity: ["early_career", "mid_career"], signal: "Long weekend ahead", icon: "TrendUp", brand: "text-amber-500 bg-amber-50" },
  { id: "f1", cat: "Shopping", t: "Myntra End of Reason", m: "Extra 20% on YONO", affinity: ["early_career", "young_student"], signal: "Payday treat", icon: "ShoppingCart", brand: "text-pink-500 bg-pink-50" },
  { id: "b1", cat: "Food", t: "Swiggy Dineout", m: "Flat 25% off bill", affinity: ["early_career", "mid_career"], signal: "Dining out pattern", icon: "ForkKnife", brand: "text-orange-500 bg-orange-50" },
  
  // Mid Career
  { id: "g1", cat: "Shopping", t: "Flat ₹150 off groceries", m: "BigBasket first order", affinity: ["mid_career", "early_career"], signal: "Salary week", icon: "ShoppingCart", brand: "text-emerald-500 bg-emerald-50" },
  { id: "h2", cat: "Hotels", t: "Taj Hotels 20% off", m: "Luxury stays", affinity: ["mid_career"], signal: "Anniversary month", icon: "House", brand: "text-stone-700 bg-stone-100" },
  
  // Senior
  { id: "h1", cat: "Health", t: "20% off Pharmacy", m: "Apollo 24|7", affinity: ["senior"], signal: "Monthly refill predicted", icon: "Handshake", brand: "text-blue-600 bg-blue-50" },
  { id: "t2", cat: "Trains", t: "IRCTC Senior Concession", m: "Hassle-free booking", affinity: ["senior"], signal: "Pilgrimage season", icon: "ArrowsLeftRight", brand: "text-orange-700 bg-orange-50" },
  { id: "m2", cat: "Health", t: "Comprehensive Check", m: "Thyrocare packages", affinity: ["senior"], signal: "Annual checkup due", icon: "Handshake", brand: "text-rose-500 bg-rose-50" },
  { id: "f2", cat: "Flights", t: "Air India Seniors", m: "Extra baggage & 10% off", affinity: ["senior"], signal: "Visiting family", icon: "TrendUp", brand: "text-red-600 bg-red-50" }
];

class RecommendationEngine {
  constructor(private persona: string) {}

  public getTopOffers(limit: number = 3) {
    let pool = CANDIDATE_OFFERS;

    // 1. Persona Filter
    pool = pool.filter(o => o.affinity.includes("all") || o.affinity.includes(this.persona));

    // 2. Diversity Filter (never repeat categories)
    const seenCats = new Set<string>();
    const diverse: typeof CANDIDATE_OFFERS = [];
    
    for (const offer of pool) {
      if (!seenCats.has(offer.cat)) {
        diverse.push(offer);
        seenCats.add(offer.cat);
      }
    }

    return diverse.slice(0, limit);
  }
}

export default function Marketplace() {
  const { profile } = useAdaptive();
  const [relevantOnly, setRelevantOnly] = useState(true);
  
  // Pipeline execution
  const engine = useMemo(() => new RecommendationEngine(profile?.archetype || "mid_career"), [profile?.archetype]);
  const DEALS = relevantOnly ? engine.getTopOffers(4) : CANDIDATE_OFFERS;
  
  // Dedup categories based on what's relevant
  const relevantCats = new Set(DEALS.map(d => d.cat));
  const shown = relevantOnly ? CATS.filter((c) => relevantCats.has(c.l) || c.l === "Shopping") : CATS;

  return (
    <motion.div layout className="phone-scroll flex-1 overflow-y-auto pb-24 bg-slate-50/50">
      <AppBar title="YONO Shop" back />
      
      <div className="screen-stack p-4 space-y-6">
        <button
          onClick={() => setRelevantOnly((r) => !r)}
          className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl border p-4 text-left transition-all ${
            relevantOnly 
              ? "border-ai/30 bg-ai-surface shadow-[0_4px_20px_rgba(92,53,204,0.08)]" 
              : "border-slate-200 bg-white hover:border-slate-300 shadow-sm"
          }`}
        >
          {relevantOnly && (
            <div className="absolute inset-0 bg-gradient-to-r from-ai/0 via-ai/5 to-ai/0 -translate-x-full animate-[ai-shimmer_2s_infinite]" />
          )}
          <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors ${relevantOnly ? "bg-ai text-white shadow-ai" : "bg-slate-100 text-slate-400"}`}>
            <Sparkle size={20} weight={relevantOnly ? "fill" : "regular"} />
          </span>
          <div className="flex-1 min-w-0">
            <div className={`text-[15px] font-semibold transition-colors ${relevantOnly ? "text-ai-text" : "text-slate-700"}`}>
              AI Curated Deals
            </div>
            <div className="t-body-sm text-slate-500 truncate mt-0.5">
              {relevantOnly ? "Showing hyper-relevant offers" : "Showing 14 unstructured offers"}
            </div>
          </div>
          <div className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300 ease-in-out ${relevantOnly ? "bg-ai" : "bg-slate-200"}`}>
            <div className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${relevantOnly ? "translate-x-5" : "translate-x-0"}`} />
          </div>
        </button>

        <motion.div layout className="grid grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {shown.map((c) => (
              <motion.button 
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                key={c.l} 
                className="flex flex-col items-center gap-2 rounded-xl bg-white p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-slate-50 text-slate-600 group-hover:bg-brand-50 group-hover:text-brand transition-colors">
                  <PhIcon name={c.i} size={22} />
                </span>
                <span className="text-[11px] font-medium text-slate-600 text-center leading-tight">{c.l}</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div layout>
          <div className="t-section mb-3 px-1 font-bold tracking-widest">{relevantOnly ? "Curated for you" : "All Offers"}</div>
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {DEALS.map((d, i) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: i * 0.03, ease: [0.2, 0, 0, 1] }}
                  key={d.id} 
                  className={`relative flex flex-col gap-3 rounded-2xl bg-white p-4 transition-all ${relevantOnly ? "shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-ai/15" : "shadow-sm border border-slate-100 opacity-70 grayscale-[0.2]"}`}
                >
                  {/* Reasoning micro-copy */}
                  {relevantOnly && (
                    <div className="flex items-center gap-1.5 border-b border-slate-50 pb-3 mb-1">
                      <Sparkle size={14} weight="fill" className="text-ai shrink-0" />
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{d.signal}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-sm ${relevantOnly ? d.brand : "bg-slate-100 text-slate-500"}`}>
                      <PhIcon name={d.icon} size={24} weight={relevantOnly ? "duotone" : "regular"} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[16px] font-bold text-slate-900 leading-tight mb-0.5">{d.t}</div>
                      <div className="text-[13px] text-slate-500">{d.m}</div>
                    </div>
                    <PhIcon name="CaretRight" size={20} className="text-slate-300" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
