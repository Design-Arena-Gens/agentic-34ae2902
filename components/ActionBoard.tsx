import { WorkflowAction } from "@/lib/types";
import { clsx } from "clsx";
import { CirclePlay } from "lucide-react";

interface ActionBoardProps {
  actions: WorkflowAction[];
}

const iconMap: Record<string, string> = {
  map: "🌐",
  linkedin: "🔗",
  shield: "🛡️",
  database: "📊"
};

export function ActionBoard({ actions }: ActionBoardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Automation Actions</h2>
          <p className="text-sm text-slate-500">
            Modular n8n components coordinating sourcing, enrichment, and CRM sync.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-primary hover:text-primary">
          <CirclePlay className="h-4 w-4" />
          Simulate Run
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => (
          <div key={action.name} className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl">{iconMap[action.icon] ?? "⚙️"}</div>
              <span
                className={clsx(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  action.platform === "n8n" ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-600"
                )}
              >
                {action.platform.toUpperCase()}
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-800">{action.name}</p>
            <p className="mt-2 text-xs text-slate-500">{action.description}</p>
            <ul className="mt-3 space-y-1 text-xs text-slate-500">
              {action.configHints.map((hint) => (
                <li key={hint} className="rounded-lg bg-accent px-3 py-1.5">
                  {hint}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
