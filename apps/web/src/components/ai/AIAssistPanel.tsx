/**
 * <AIAssistPanel> - DESIGN.md §8.2. Conversational assistant in a bottom sheet. Kept in
 * More/Help - NEVER the demo centrepiece (the engine-driven nudge is). Disclaimer footer present.
 */
import { useState } from "react";
import { Sparkle } from "../../lib/icons";
import { BottomSheet } from "../organisms/BottomSheet";

const QUICK = [
  "Explain my last transaction",
  "Where did I spend most this week?",
  "How much FD interest did I earn?",
];

interface Msg {
  who: "user" | "ai";
  text: string;
}

export function AIAssistPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [log, setLog] = useState<Msg[]>([
    { who: "ai", text: "Hi - I can explain anything on your screen. I never give investment advice." },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  function ask(q: string) {
    if (!q.trim()) return;
    setLog((l) => [...l, { who: "user", text: q }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setLog((l) => [
        ...l,
        { who: "ai", text: "Your total EMI outflow is ₹8,200 across 2 loans - home ₹6,500 (due 5th), car ₹1,700 (due 10th)." },
      ]);
      setThinking(false);
    }, 900);
  }

  return (
    <BottomSheet open={open} onClose={onClose} title={<span className="flex items-center gap-1.5"><Sparkle size={20} weight="fill" className="text-ai" /> YONO AI</span>} height="72%">
      <div className="mb-3 flex flex-wrap gap-2">
        {QUICK.map((q) => (
          <button
            key={q}
            onClick={() => ask(q)}
            className="rounded-full border border-ai-border px-3 py-1.5 t-label-sm text-ai"
          >
            {q}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {log.map((m, i) => (
          <div
            key={i}
            className={[
              "max-w-[85%] rounded-lg px-3 py-2 t-body",
              m.who === "user"
                ? "self-end bg-brand text-white"
                : "self-start bg-ai-surface text-ai-text",
            ].join(" ")}
          >
            {m.text}
          </div>
        ))}
        {thinking && (
          <div className="self-start inline-flex gap-1 rounded-lg bg-ai-surface px-3 py-3">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-2 w-2 animate-bounce rounded-full bg-ai"
                style={{ animationDelay: `${i * 120}ms` }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="sticky bottom-0 mt-3 flex items-center gap-2 bg-bg-surface pt-2">
        <div className="relative flex-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ask(input)}
            placeholder="Ask anything..."
            className="w-full rounded-full border border-line py-3 pl-4 pr-10 t-body outline-none focus:border-ai transition-colors shadow-sm"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-ai transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm112,64a8,8,0,0,1-16,0,64,64,0,0,0-128,0,8,8,0,0,1-16,0,80.11,80.11,0,0,1,72-79.6V208H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16H136V208.4A80.11,80.11,0,0,1,208,128Z"></path></svg>
          </button>
        </div>
        <button
          onClick={() => ask(input)}
          aria-label="Send"
          className="grid h-11 w-11 place-items-center rounded-full bg-ai text-white"
        >
          <Sparkle size={20} weight="fill" />
        </button>
      </div>
      <p className="mt-2 t-label-sm text-content-tertiary">
        AI responses may be incorrect. Verify before acting.
      </p>
    </BottomSheet>
  );
}
