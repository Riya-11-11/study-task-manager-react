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
         <button
          onClick={() => handleFilter("High")}
          className={`rounded-full px-5 py-2 text-sm ${
            taskFilters === "High"
              ? "bg-violet-600 text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300"
          }`}
        >
          High
        </button>

        <button
          onClick={() => handleFilter("Medium")}
          className={`rounded-full px-5 py-2 text-sm ${
            taskFilters === "Medium"
              ? "bg-violet-600 text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300"
          }`}
        >
          Medium
        </button>

        <button
          onClick={() => handleFilter("Low")}
          className={`rounded-full px-5 py-2 text-sm ${
            taskFilters === "Low"
              ? "bg-violet-600 text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300"
          }`}
        >
          Low
        </button>
      </div>

    </section>
  );
}

export default TaskFilters;
