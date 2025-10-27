import { useMemo } from "react";
import { motion } from "framer-motion";
import StatsCards from "./components/StatsCards";
import RecentApplications from "./components/RecentApplications";
import UpcomingInterviews from "./components/UpcomingInterviews";
import SuccessRate from "./components/SuccessRate";

export default function App() {
  // Sample UI data (replace with API data later)
  const applications = [
    { id: 1, role: "Frontend Engineer", company: "Acme Corp", status: "pending", applied: "2d ago" },
    { id: 2, role: "Backend Developer", company: "Globex", status: "success", applied: "5d ago" },
    { id: 3, role: "Full Stack Engineer", company: "Innotech", status: "rejected", applied: "1w ago" },
    { id: 4, role: "Mobile Developer", company: "BlueSky", status: "pending", applied: "3d ago" },
    { id: 5, role: "Data Analyst", company: "Datafy", status: "success", applied: "1d ago" },
  ];

  const interviews = [
    { id: 1, role: "Frontend Engineer - Round 2", company: "Acme Corp", date: "Nov 28, 2025", time: "10:30 AM", location: "Zoom" },
    { id: 2, role: "Backend Developer - HR", company: "Globex", date: "Dec 02, 2025", time: "2:00 PM", location: "On-site" },
  ];

  const stats = useMemo(() => {
    const total = applications.length;
    const pending = applications.filter((a) => a.status === "pending").length;
    const rejected = applications.filter((a) => a.status === "rejected").length;
    const success = applications.filter((a) => a.status === "success").length;
    return { total, pending, rejected, success };
  }, [applications]);

  const handleCreate = () => {
    alert("Create new application - hook this to your form/modal later.");
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top gradient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[500px] w-[900px] bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            JobTracker Dashboard
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Track your applications, watch your progress, and stay ready for upcoming interviews.
          </p>
        </motion.header>

        <StatsCards stats={stats} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <RecentApplications data={applications} onCreate={handleCreate} />
          </div>
          <div className="space-y-6">
            <SuccessRate total={stats.total} success={stats.success} />
            <UpcomingInterviews interviews={interviews} />
          </div>
        </div>
      </div>
    </div>
  );
}
