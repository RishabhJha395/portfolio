import { motion } from "framer-motion";

export default function StatCard({ value, label }) {
  const splitBadge = typeof value === "string" && value.includes("@");
  const [badge, platform] = splitBadge ? value.split("@") : [];

  return (
    <motion.div
      className="glass-card flex min-h-24 flex-col items-center justify-center px-4 py-4 text-center"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {splitBadge ? (
        <div className="max-w-full text-center font-black leading-tight text-white">
          <span className="block text-2xl sm:text-3xl">{badge}</span>
          <span className="block whitespace-nowrap text-lg sm:text-xl">@{platform}</span>
        </div>
      ) : (
        <div className="max-w-full break-words text-xl font-black leading-tight text-white sm:text-2xl lg:text-3xl">
          {value}
        </div>
      )}
      <div className="mt-2 text-xs font-bold text-white/80 sm:text-sm">{label}</div>
    </motion.div>
  );
}
