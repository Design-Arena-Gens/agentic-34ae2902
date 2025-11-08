import { ReactNode } from "react";
import { clsx } from "clsx";

interface MetricCardProps {
  label: string;
  value: string;
  trendLabel?: string;
  icon: ReactNode;
  accent?: "primary" | "neutral";
}

export function MetricCard({ label, value, trendLabel, icon, accent = "primary" }: MetricCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div
        className={clsx(
          "flex h-12 w-12 items-center justify-center rounded-xl",
          accent === "primary" ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-600"
        )}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
        <p className="text-xl font-semibold text-slate-900">{value}</p>
        {trendLabel ? <p className="text-xs text-slate-500">{trendLabel}</p> : null}
      </div>
    </div>
  );
}
