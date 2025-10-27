import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Plus, Building2, BadgeCheck } from "lucide-react";

const statusColors = {
  success: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  pending: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  rejected: "bg-rose-500/15 text-rose-300 border-rose-500/30",
};

export default function RecentApplications({ data = [], onCreate }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    return data
      .filter((item) =>
        [item.role, item.company].join(" ").toLowerCase().includes(query.toLowerCase())
      )
      .filter((item) => (filter === "all" ? true : item.status === filter));
  }, [data, query, filter]);

  return (
    <div className="rounded-2xl bg-slate-900/70 border border-white/10 shadow-xl overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-white/10 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
              <BadgeCheck className="h-5 w-5 text-indigo-300" />
            </div>
            <div>
              <h3 className="text-white font-semibold tracking-tight">Recent Applications</h3>
              <p className="text-slate-400 text-sm">Search, filter and manage your job pipeline</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search roles or companies"
                className="pl-9 pr-3 py-2.5 rounded-xl bg-slate-800/70 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 placeholder:text-slate-500"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none pl-9 pr-8 py-2.5 rounded-xl bg-slate-800/70 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="success">Success</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <button
              onClick={onCreate}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white border border-white/10 shadow-lg hover:shadow-indigo-500/20 hover:opacity-95 transition"
            >
              <Plus className="h-4 w-4" />
              Add New
            </button>
          </div>
        </div>
      </div>

      <div className="divide-y divide-white/5">
        <AnimatePresence initial={false}>
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="p-4 sm:p-5 flex items-center justify-between bg-slate-900/30 hover:bg-slate-800/30"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-slate-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-medium truncate">{item.role}</p>
                  <p className="text-slate-400 text-sm truncate">{item.company} • Applied {item.applied}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                    statusColors[item.status] || "bg-slate-500/15 text-slate-300 border-slate-500/30"
                  }`}
                >
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="p-8 text-center text-slate-400">No applications match your search.</div>
        )}
      </div>
    </div>
  );
}
