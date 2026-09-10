function TaskCard({ task }) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border p-4 ${
        task.completed
          ? "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/30"
          : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
      }`}
    >
      {/* Checkbox UI */}
      <div
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 ${
          task.completed
            ? "border-violet-600 bg-violet-600 text-xs text-white"
            : "border-slate-300 dark:border-slate-600"
        }`}
      >
        {task.completed && "✓"}
      </div>

      {/* Task information */}
      <div className="min-w-0 flex-1">
        <span className="rounded-md bg-violet-100 px-2 py-1 text-xs text-violet-700 dark:bg-violet-950 dark:text-violet-300">
          {task.type}
        </span>

        <h3 className="mt-2 text-sm font-semibold">{task.title}</h3>

        <div className="mt-2 flex gap-4 text-xs text-slate-400">
          <span>📅 {task.date}</span>
          <span>🏷 {task.type}</span>
          <span>★ {task.priority}</span>
        </div>
      </div>

      {/* Actions — currently only UI */}
      <div className="hidden gap-2 sm:flex">
        <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs dark:border-slate-700">
          Edit
        </button>

        <button className="rounded-lg border border-red-200 px-3 py-2 text-xs text-red-500 dark:border-red-900">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
