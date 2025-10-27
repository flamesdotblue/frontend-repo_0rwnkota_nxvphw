import { motion } from "framer-motion";
import { Briefcase, XCircle, Clock, CheckCircle } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -4, scale: 1.01 }}
    className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-slate-900/70 to-slate-800/70 border border-white/10 shadow-xl"
  >
    <div
      className={`absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl opacity-40 ${accent}`}
    />
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-slate-300 text-sm">{label}</p>
        <p className="text-3xl font-semibold text-white tracking-tight">{value}</p>
      </div>
      <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10">
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  </motion.div>
);

export default function StatsCards({ stats }) {
  const items = [
    {
      icon: Briefcase,
      label: "Total Applications",
      value: stats.total,
      accent: "bg-indigo-500",
    },
    { icon: XCircle, label: "Rejected", value: stats.rejected, accent: "bg-rose-500" },
    { icon: Clock, label: "Pending", value: stats.pending, accent: "bg-amber-500" },
    { icon: CheckCircle, label: "Success", value: stats.success, accent: "bg-emerald-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {items.map((item, idx) => (
        <StatCard key={idx} {...item} />
      ))}
    </div>
  );
}
