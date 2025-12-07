export default function AboutUsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">About iClinic</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          We&apos;re on a mission to modernize clinic front-desks with AI, keeping
          humans in control while automating routine operations.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our mission</h2>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6">
          <p className="text-gray-600 dark:text-gray-400">
            iClinic was founded to solve a critical problem facing healthcare clinics
            today: the overwhelming burden on front-desk staff and the frustration patients
            experience when they can&apos;t reach their clinic. We believe AI should augment
            human capabilities, not replace them. Our AI front-desk handles routine inquiries,
            scheduling, and administrative tasks, freeing your staff to focus on in-person
            patient care and complex situations that require human judgment and empathy.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Who we serve</h2>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            iClinic is designed for small to mid-sized clinics and multi-location practices
            that want to improve patient access without the cost and complexity of expanding
            their front-desk team. Whether you&apos;re a single-location family practice or
            a multi-site specialty group, our solution scales to meet your needs.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            We understand the unique challenges of healthcare operations, from HIPAA compliance
            to EHR integration, and we&apos;ve built iClinic with these requirements at
            the core of our design.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our approach</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2">
            <h3 className="font-semibold text-lg">Reliability</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built on modern cloud infrastructure (AWS) with 99.9% uptime, ensuring your
              clinic&apos;s front-desk is always available when patients need it.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2">
            <h3 className="font-semibold text-lg">Security & HIPAA focus</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Every aspect of iClinic is designed with HIPAA compliance in mind, from
              encrypted communications to secure data handling and audit trails.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2">
            <h3 className="font-semibold text-lg">Modern AI infrastructure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Powered by cutting-edge AI technology, including NVIDIA Inception-style
              infrastructure, to deliver natural, accurate interactions with patients.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2">
            <h3 className="font-semibold text-lg">Human-centered design</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We keep humans in control. Complex situations are escalated to your team,
              and you always have visibility and control over AI interactions.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Founder story</h2>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6">
          <p className="text-gray-600 dark:text-gray-400">
            iClinic was born from firsthand experience with the challenges facing modern
            healthcare clinics. After witnessing the strain on front-desk staff and the
            frustration of patients unable to reach their providers, we set out to build
            a solution that leverages AI to bridge this gap. Our team combines deep expertise
            in healthcare operations, AI technology, and software engineering to deliver a
            product that truly serves both clinics and their patients.
          </p>
        </div>
      </section>
    </div>
  );
}

