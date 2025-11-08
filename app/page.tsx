import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { PipelineBoard } from "@/components/PipelineBoard";
import { LeadTable } from "@/components/LeadTable";
import { AutomationBlueprints } from "@/components/AutomationBlueprints";
import { PersonaCard } from "@/components/PersonaCard";
import { ActionBoard } from "@/components/ActionBoard";
import { blueprints, leads, personaPrompt, pipeline, workflowActions } from "@/lib/data";
import { CheckCircle2, Gauge, Globe2, UsersRound } from "lucide-react";

function computeMetrics() {
  const verifiedCount = leads.filter((lead) => lead.enrichment.domainVerified).length;
  const avgScore = Math.round(
    leads.reduce((acc, lead) => acc + lead.score, 0) / Math.max(leads.length, 1)
  );
  const totalContacts = leads.length;
  const coverage = Math.round((verifiedCount / Math.max(leads.length, 1)) * 100);

  return {
    verifiedCount,
    avgScore,
    totalContacts,
    coverage
  };
}

export default function Page() {
  const metrics = computeMetrics();

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10">
      <Header />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Qualified Leads"
          value={`${metrics.totalContacts} active`}
          trendLabel="Goal: 25/day"
          icon={<UsersRound className="h-5 w-5" />}
        />
        <MetricCard
          label="Average Lead Score"
          value={`${metrics.avgScore}/100`}
          trendLabel="Minimum threshold: 70"
          icon={<Gauge className="h-5 w-5" />}
        />
        <MetricCard
          label="Domain Verified"
          value={`${metrics.verifiedCount} (${metrics.coverage}%)`}
          trendLabel="Target: 95%+ verification"
          icon={<CheckCircle2 className="h-5 w-5" />}
        />
        <MetricCard
          label="Source Coverage"
          value="Search · Maps · Workspace"
          trendLabel="Updated hourly via automation"
          icon={<Globe2 className="h-5 w-5" />}
          accent="neutral"
        />
      </div>
      <LeadTable leads={leads} />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PipelineBoard stages={pipeline} />
        </div>
        <PersonaCard persona={personaPrompt} />
      </div>
      <ActionBoard actions={workflowActions} />
      <AutomationBlueprints blueprints={blueprints} />
    </main>
  );
}
