import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function UpcomingInterviews({ interviews = [] }) {
  return (
    <div className="rounded-2xl bg-slate-900/70 border border-white/10 shadow-xl overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-white/10 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
            <Calendar className="h-5 w-5 text-emerald-300" />
          </div>
          <div>
            <h3 className="text-white font-semibold tracking-tight">Upcoming Interviews</h3>
            <p className="text-slate-400 text-sm">Keep track of dates, times and locations</p>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {interviews.length === 0 && (
          <p className="text-slate-400">No interviews scheduled.</p>
        )}

        {interviews.map((iv, idx) => (
          <motion.div
            key={iv.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-white font-medium">{iv.role}</p>
                <p className="text-slate-400 text-sm">{iv.company}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  <Calendar className="h-4 w-4" /> {iv.date}
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  <Clock className="h-4 w-4" /> {iv.time}
                </div>
                {iv.location && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    <MapPin className="h-4 w-4" /> {iv.location}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
