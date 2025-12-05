export default function UseCasesPage() {
  const useCases = [
    {
      title: "New patient intake",
      scenario: "A new patient calls to schedule their first appointment and has questions about insurance, location, and what to bring.",
      solution: "iMedClinic answers immediately, collects insurance information, explains the intake process, and books the appointment. All details are automatically logged in your EHR for review.",
    },
    {
      title: "Existing patient rescheduling",
      scenario: "A patient needs to reschedule their appointment due to a conflict, but it&apos;s after hours.",
      solution: "The AI front-desk handles the request instantly, checks availability, suggests alternative times, and confirms the new appointment. The patient receives confirmation via their preferred channel.",
    },
    {
      title: "Medication refill request handling",
      scenario: "A patient calls requesting a refill of their prescription but isn&apos;sure of the medication name or dosage.",
      solution: "iMedClinic asks clarifying questions, retrieves the patient&apos;s medication history from your EHR, and routes the request to the appropriate provider with all necessary context.",
    },
    {
      title: "After-hours coverage",
      scenario: "A patient calls on a weekend with an urgent but non-emergency question about their recent visit.",
      solution: "The AI front-desk is available 24/7 to answer questions, provide general information, and take messages. Urgent matters are escalated appropriately, while routine inquiries are handled immediately.",
    },
    {
      title: "Multi-location routing",
      scenario: "A patient calls but isn&apos;t sure which location they should visit—Aliana, Cinco Ranch/Katy, or Sugarland.",
      solution: "iMedClinic identifies the patient&apos;s location based on their address or preference, routes them to the nearest clinic, and ensures their appointment is booked at the correct location.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Use cases</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          See how iMedClinic handles common scenarios to improve your clinic&apos;s
          efficiency and patient experience.
        </p>
      </div>

      <div className="space-y-8">
        {useCases.map((useCase, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-8 space-y-4"
          >
            <h2 className="text-2xl font-semibold">{useCase.title}</h2>
            <div className="space-y-2">
              <p className="font-medium text-slate-700 dark:text-slate-300">
                Scenario:
              </p>
              <p className="text-slate-600 dark:text-slate-400">{useCase.scenario}</p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-700 dark:text-slate-300">
                How iMedClinic helps:
              </p>
              <p className="text-slate-600 dark:text-slate-400">{useCase.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

