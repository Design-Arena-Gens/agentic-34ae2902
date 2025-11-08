import { Building2, MapPin, Target } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Mumbai_Google_LeadGen
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            Google Solutions Lead Generation Control Hub
          </h1>
        </div>
        <Link
          href="https://docs.n8n.io/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
        >
          Launch n8n Blueprint
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-3 rounded-xl bg-accent px-4 py-3 text-slate-700">
          <Target className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Objective</p>
            <p className="text-sm">
              Generate & qualify high-fit leads for Google services across Mumbai.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-accent px-4 py-3 text-slate-700">
          <MapPin className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Region Focus</p>
            <p className="text-sm">Mumbai Metropolitan Area</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-accent px-4 py-3 text-slate-700">
          <Building2 className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Industry Targets</p>
            <p className="text-sm">IT · Startups · Digital Marketing · Finance</p>
          </div>
        </div>
      </div>
    </header>
  );
}
