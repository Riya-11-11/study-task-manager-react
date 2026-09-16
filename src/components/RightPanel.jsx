function RightPanel({totalTasks, completedTasks, pendingTasks, progress}) {
  return (
    <aside className="hidden border-l border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900 xl:block">

      {/* Progress */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">

        <h2 className="font-bold">
          Your Progress
        </h2>

        <div className="mx-auto my-6 flex h-32 w-32 flex-col items-center justify-center rounded-full border-[12px] border-violet-200 dark:border-violet-950">

          <strong className="text-2xl">
            {progress}%
          </strong>

          <span className="text-[10px] text-slate-400">
            Completed
          </span>

        </div>

        <div className="space-y-3 text-sm">

          <p className="flex justify-between">
            <span>Completed</span>
            <span>{completedTasks}</span>
          </p>

          <p className="flex justify-between">
            <span>Pending</span>
            <span>{pendingTasks}</span>
          </p>

          <p className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{totalTasks}</span>
          </p>

        </div>

      </div>


      {/* Subjects */}
      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">

        <h2 className="mb-5 font-bold">
          Subjects
        </h2>

        <div className="space-y-5">

          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span>React</span>
              <span>2 / 4</span>
            </div>

            <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-2 w-1/2 rounded-full bg-violet-500" />
            </div>
          </div>


          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span>DSA</span>
              <span>1 / 3</span>
            </div>

            <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-2 w-1/3 rounded-full bg-emerald-500" />
            </div>
          </div>


          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span>Backend</span>
              <span>1 / 2</span>
            </div>

            <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-2 w-1/2 rounded-full bg-blue-500" />
            </div>
          </div>

        </div>

      </div>


      {/* Motivation */}
      <div className="mt-5 rounded-2xl bg-violet-100 p-5 dark:bg-violet-950/40">

        <h3 className="font-bold">
          Today's Motivation ☀️
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          You don't need to be perfect.
          You need to keep showing up.
        </p>

      </div>

    </aside>
  );
}

export default RightPanel;