function Topbar({ searchTask, setSearchTask}) {
  return (
    <header className="flex items-center justify-between gap-4">
      {/* Search */}
      <div className="flex max-w-xl flex-1 items-center gap-3 rounded-xl bg-slate-100 px-4 py-3 dark:bg-slate-900">
        <span className="text-slate-400">🔍</span>

        <input
          type="text"
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
          placeholder="Search tasks..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
      </div>

      {/* User */}
      <div className="flex items-center gap-3">
        <button className="hidden text-lg sm:block">🔔</button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-200 font-semibold text-violet-700 dark:bg-violet-900 dark:text-violet-300">
          R
        </div>

        <span className="hidden text-sm font-medium sm:block">Riya</span>

        <span className="text-slate-400">˅</span>
      </div>
    </header>
  );
}

export default Topbar;
