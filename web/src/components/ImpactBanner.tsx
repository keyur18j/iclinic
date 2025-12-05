export function ImpactBanner() {
  const stats = [
    {
      icon: "💰",
      iconBg: "bg-orange-50 dark:bg-orange-950/20",
      iconColor: "text-orange-500 dark:text-orange-400",
      stat: "50%+",
      label: "Cost Reduction",
      description:
        "Automates phone-based workflows to reduce manual effort and lower front-desk costs without sacrificing performance.",
    },
    {
      icon: "📈",
      iconBg: "bg-green-50 dark:bg-green-950/20",
      iconColor: "text-green-500 dark:text-green-400",
      stat: "30%+",
      label: "Fewer Missed Calls",
      description:
        "Answers every call instantly, helping prevent lost revenue from missed calls and unbooked appointments.",
    },
    {
      icon: "✅",
      iconBg: "bg-blue-50 dark:bg-blue-950/20",
      iconColor: "text-blue-500 dark:text-blue-400",
      stat: "99%+",
      label: "QA Accuracy",
      description:
        "Reviews every interaction consistently, delivering near-perfect accuracy at scale compared to manual QA.",
    },
  ];

  return (
    <section className="bg-sky-100 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Heading + Subtitle */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-50">
            AI Voice Agents that Drive{" "}
            <span className="text-[#f25b3f] dark:text-orange-500">Real ROI</span>
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300">
            Faster calls. Lower costs. Higher accuracy. All with less effort from your
            team.
          </p>
        </div>

        {/* Stats Cards Row */}
        <div className="grid gap-6 md:grid-cols-3 mt-8 md:mt-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-[32px] bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 px-6 py-8 flex flex-col items-center text-center gap-4"
            >
              {/* Icon */}
              <div
                className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${stat.iconBg} ${stat.iconColor} text-lg`}
              >
                {stat.icon}
              </div>

              {/* Main Stat */}
              <div className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-50">
                {stat.stat}
              </div>

              {/* Label */}
              <div className="text-sm md:text-base text-slate-800 dark:text-slate-200">
                {stat.label}
              </div>

              {/* Divider */}
              <div className="mt-4 mb-4 h-px w-full bg-slate-100 dark:bg-slate-800" />

              {/* Description */}
              <p className="text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

