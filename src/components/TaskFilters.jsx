function TaskFilters() {
  return (
    <section className="my-5 flex flex-col justify-between gap-4 sm:flex-row">

      <div className="flex gap-2">

        <button className="rounded-full bg-violet-600 px-5 py-2 text-sm text-white">
          All
        </button>

        <button className="rounded-full bg-slate-100 px-5 py-2 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          Pending
        </button>

        <button className="rounded-full bg-slate-100 px-5 py-2 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          Completed
        </button>

      </div>

      <input
        type="text"
        placeholder="Search tasks..."
        className="rounded-full bg-slate-100 px-4 py-2 text-sm outline-none dark:bg-slate-900"
      />

    </section>
  );
}

export default TaskFilters;