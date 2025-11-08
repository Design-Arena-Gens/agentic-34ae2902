import { AutomationBlueprint } from "@/lib/types";
import { CheckCircle2, PlayCircle } from "lucide-react";

interface AutomationBlueprintsProps {
  blueprints: AutomationBlueprint[];
}

export function AutomationBlueprints({ blueprints }: AutomationBlueprintsProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Automation Blueprints</h2>
          <p className="text-sm text-slate-500">
            Ready-to-run n8n workflows covering sourcing, enrichment, and CRM sync.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
          <PlayCircle className="h-4 w-4" />
          Launch Workflow
        </button>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {blueprints.map((blueprint) => (
          <div key={blueprint.id} className="rounded-xl border border-slate-200 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-primary">{blueprint.title}</p>
                <p className="text-xs text-slate-500">Trigger: {blueprint.trigger}</p>
              </div>
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>
            <ol className="mt-4 space-y-3 text-sm text-slate-600">
              {blueprint.steps.map((step, idx) => (
                <li key={`${blueprint.id}-${idx}`} className="rounded-lg bg-accent p-3">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Step {idx + 1} · {step.tool}
                  </div>
                  <p className="mt-1 font-medium text-slate-800">{step.name}</p>
                  <p className="text-xs text-slate-500">{step.detail}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm font-medium text-slate-700">Output</p>
            <p className="text-xs text-slate-500">{blueprint.output}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
