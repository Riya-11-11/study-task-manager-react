function Stats({totalTasks, completedTasks, pendingTasks, progress}) {
  return (
    <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Total Tasks
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {totalTasks}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Completed
        </p>

        <h2 className="mt-2 text-3xl font-bold text-emerald-500">
          {completedTasks}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Pending
        </p>

        <h2 className="mt-2 text-3xl font-bold text-emerald-500">
          {pendingTasks}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Progress
        </p>

        <h2 className="mt-2 text-3xl font-bold text-violet-500">
          {progress}%
        </h2>
      </div>

    </section>
  );
}

export default Stats;