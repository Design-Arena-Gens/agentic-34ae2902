import { Lead } from "@/lib/types";
import { confidenceColor, formatDate, formatPhone, stageLabel } from "@/lib/utils";
import { ExternalLink, Linkedin } from "lucide-react";
import Link from "next/link";

interface LeadTableProps {
  leads: Lead[];
}

export function LeadTable({ leads }: LeadTableProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Qualified Lead Queue</h2>
          <p className="text-sm text-slate-500">
            Prioritized contacts filtered by industry fit, size (10-1000), and verified decision
            makers.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground">
            Export to Excel
          </button>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-primary hover:text-primary">
            Push to CRM
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3 text-sm">
          <thead className="text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4">Company</th>
              <th className="px-4">Contact</th>
              <th className="px-4">Industry</th>
              <th className="px-4">Website</th>
              <th className="px-4">Source</th>
              <th className="px-4">Score</th>
              <th className="px-4">Stage</th>
              <th className="px-4">Validated</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="rounded-xl border border-slate-200 bg-accent/60">
                <td className="px-4 py-4">
                  <div className="font-semibold text-slate-900">{lead.companyName}</div>
                  <div className="text-xs text-slate-500">{lead.address}</div>
                  <div className="mt-2 text-xs text-slate-500">Size: {lead.employeeRange}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="font-medium text-slate-900">
                    {lead.contactName} · {lead.contactRole}
                  </div>
                  <div className="text-xs text-slate-500">{lead.email}</div>
                  <div className="text-xs text-slate-500">{formatPhone(lead.phone)}</div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <Link
                      href={lead.enrichment.linkedinUrl ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                    </Link>
                    <span
                      className={`font-medium ${confidenceColor(
                        lead.enrichment.confidence
                      )}`}
                    >
                      {(lead.enrichment.confidence * 100).toFixed(0)}% confidence
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {lead.industry}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <Link
                    href={lead.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    Visit Site <ExternalLink className="h-3 w-3" />
                  </Link>
                  <div className="mt-2 space-y-1 text-xs text-slate-500">
                    {lead.enrichment.websiteContacts.map((contact) => (
                      <div key={contact}>{contact}</div>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-slate-700">{lead.source}</p>
                </td>
                <td className="px-4 py-4">
                  <span className="text-lg font-semibold text-slate-900">{lead.score}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-medium text-slate-700">
                    {stageLabel(lead.pipelineStage)}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <p className="text-xs text-slate-500">Last check</p>
                  <p className="text-sm font-medium text-slate-700">
                    {formatDate(lead.lastValidated)}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
