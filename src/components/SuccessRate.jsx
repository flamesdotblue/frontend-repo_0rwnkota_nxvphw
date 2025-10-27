import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function SuccessRate({ total, success }) {
  const rate = total > 0 ? Math.round((success / total) * 100) : 0;

  return (
    <div className="rounded-2xl bg-slate-900/70 border border-white/10 shadow-xl overflow-hidden p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-fuchsia-500/20 border border-fuchsia-400/30 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-fuchsia-300" />
          </div>
          <div>
            <h3 className="text-white font-semibold tracking-tight">Success Rate</h3>
            <p className="text-slate-400 text-sm">Ratio of offers to total applications</p>
          </div>
        </div>
        <span className="text-slate-400 text-sm">Last 90 days</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <div className="relative h-40 w-40 mx-auto">
          <motion.div
            initial={{ background: `conic-gradient(#22c55e 0deg, transparent 0deg)` }}
            animate={{ background: `conic-gradient(#22c55e ${rate * 3.6}deg, transparent 0deg)` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full w-full rounded-full"
            style={{
              background: `conic-gradient(#22c55e ${rate * 3.6}deg, transparent 0deg)`,
            }}
          />
          <div className="absolute inset-2 rounded-full bg-slate-900 border border-white/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <p className="text-3xl font-semibold text-white text-center">{rate}%</p>
              <p className="text-slate-400 text-xs text-center">{success} of {total}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Offers</span>
            <span className="text-white font-medium">{success}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Applications</span>
            <span className="text-white font-medium">{total}</span>
          </div>
          <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${rate}%` }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-emerald-500 to-fuchsia-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
