import { PipelineStage } from "@/lib/types";
import { ArrowRight } from "lucide-react";

interface PipelineBoardProps {
  stages: PipelineStage[];
}

export function PipelineBoard({ stages }: PipelineBoardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Qualification Pipeline</h2>
          <p className="text-sm text-slate-500">
            End-to-end flow from sourcing to sales handoff with key performance markers.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        {stages.map((stage, idx) => (
          <div key={stage.id} className="flex-1">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-primary">{stage.title}</p>
              <p className="mt-2 text-sm text-slate-600">{stage.description}</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-500">
                {stage.kpis.map((kpi) => (
                  <li key={kpi} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    {kpi}
                  </li>
                ))}
              </ul>
            </div>
            {idx < stages.length - 1 ? (
              <div className="my-3 hidden justify-center lg:flex">
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
