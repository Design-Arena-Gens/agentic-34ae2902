import { PersonaPrompt } from "@/lib/types";
import { Brain, ShieldCheck } from "lucide-react";

interface PersonaCardProps {
  persona: PersonaPrompt;
}

export function PersonaCard({ persona }: PersonaCardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <Brain className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
          <div>
            <p className="text-xs uppercase tracking-wide text-primary">{persona.title}</p>
            <h2 className="text-lg font-semibold text-slate-900">Persona & Guardrails</h2>
          </div>
        </div>
        <div className="rounded-full bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
          Success Metrics Coverage
        </div>
      </div>
      <p className="mt-5 text-sm text-slate-600">{persona.statement}</p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Guardrails
          </h3>
          <ul className="mt-2 space-y-2 text-xs text-slate-500">
            {persona.guardrails.map((guardrail) => (
              <li key={guardrail} className="rounded-lg bg-accent px-3 py-2">
                {guardrail}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <ShieldCheck className="h-4 w-4 rotate-45 text-primary" />
            Success Metrics
          </h3>
          <ul className="mt-2 space-y-2 text-xs text-slate-500">
            {persona.successMetrics.map((metric) => (
              <li key={metric} className="rounded-lg bg-accent px-3 py-2">
                {metric}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
