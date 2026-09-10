function Stats() {
  return (
    <section className="grid gap-4 md:grid-cols-3">

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Total Tasks
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          12
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Completed
        </p>

        <h2 className="mt-2 text-3xl font-bold text-emerald-500">
          5
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Progress
        </p>

        <h2 className="mt-2 text-3xl font-bold text-violet-500">
          42%
        </h2>
      </div>

    </section>
  );
}

export default Stats;