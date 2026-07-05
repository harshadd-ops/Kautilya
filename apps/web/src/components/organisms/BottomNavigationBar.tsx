/** <BottomNavigationBar> - Apple-grade iOS navigation bar. */
import { NavLink } from "react-router-dom";
import { PhIcon } from "../../lib/icons";

const ITEMS = [
  { to: "/app/home", icon: "House", label: "Home" },
  { to: "/app/pay", icon: "ArrowsLeftRight", label: "Pay" },
  { to: "/app/invest", icon: "TrendUp", label: "Invest" },
  { to: "/app/marketplace", icon: "Gift", label: "Shop" },
  { to: "/app/profile", icon: "DotsThree", label: "More" },
];

export function BottomNavigationBar() {
  return (
    <nav
      aria-label="Main navigation"
      className="absolute inset-x-0 bottom-0 z-[300] flex items-stretch border-t border-black/[0.08] bg-white/85 backdrop-blur-2xl saturate-[1.8] pb-7 pt-1.5"
      style={{ height: 86 }}
    >
      {ITEMS.map((it) => (
        <NavLink
          key={it.to}
          to={it.to}
          aria-label={it.label}
          className={({ isActive }) =>
            [
              "relative flex flex-1 flex-col items-center justify-start gap-[3px] pt-0.5",
              isActive ? "text-[#2C1477]" : "text-[#999999] hover:text-[#777777] transition-colors",
            ].join(" ")
          }
        >
          {({ isActive }) => (
            <>
              <span className="relative z-10 transition-transform duration-200 active:scale-95">
                <PhIcon name={it.icon} size={26} weight={isActive ? "fill" : "regular"} />
              </span>
              <span className="text-[10px] font-medium tracking-[0.01em] leading-none">{it.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
