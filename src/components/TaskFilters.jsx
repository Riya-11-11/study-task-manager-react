function TaskFilters({ taskFilters, handleFilter }) {
  return (
    <section className="my-5 flex flex-col justify-between gap-4 sm:flex-row">
      <div className="flex gap-2">
        <button
          onClick={() => handleFilter("All")}
          className={`rounded-full px-5 py-2 text-sm ${
            taskFilters === "All"
              ? "bg-violet-600 text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300"
          }`}
        >
          All
        </button>

        <button
          onClick={() => handleFilter("Pending")}
          className={`rounded-full px-5 py-2 text-sm ${
            taskFilters === "Pending"
              ? "bg-violet-600 text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300"
          }`}
        >
          Pending
        </button>

        <button
          onClick={() => handleFilter("Completed")}
          className={`rounded-full px-5 py-2 text-sm ${
            taskFilters === "Completed"
              ? "bg-violet-600 text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300"
          }`}
        >
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
