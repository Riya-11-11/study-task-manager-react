function Sidebar() {
  return (
    <aside className="hidden border-r border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900 lg:block">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-xl">
          📚
        </div>

        <div>
          <h2 className="font-bold">StudyFlow</h2>

          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Plan • Study • Grow
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-10 space-y-2">

        <div className="cursor-pointer rounded-xl bg-violet-100 px-4 py-3 text-sm font-medium text-violet-700 dark:bg-violet-950 dark:text-violet-300">
          🏠 Dashboard
        </div>

        <div className="cursor-pointer rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800">
          ✓ My Tasks
        </div>

        <div className="cursor-pointer rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800">
          📅 Calendar
        </div>

        <div className="cursor-pointer rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800">
          📊 Statistics
        </div>

        <div className="cursor-pointer rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800">
          👤 Profile
        </div>

      </nav>

      <div className="mt-72 text-sm italic text-violet-500">
        Small steps every day lead to big dreams. 💜
      </div>

    </aside>
  );
}

export default Sidebar;