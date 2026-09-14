import { useState } from "react";

function TaskCard({ task, completeClickHandler, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newType, setNewType] = useState(task.type);
  const [newPriority, setNewPriority] = useState(task.priority);

  return (
    <div
      className={`flex items-start gap-4 rounded-2xl border p-4 transition ${
        task.completed
          ? "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/30"
          : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
      }`}
    >
      {/* Checkbox */}
      <div
        onClick={() => completeClickHandler(task.id)}
        className={`mt-1 flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-md border-2 ${
          task.completed
            ? "border-violet-600 bg-violet-600 text-xs text-white"
            : "border-slate-300 dark:border-slate-600"
        }`}
      >
        {task.completed && "✓"}
      </div>

      {/* Task Information */}
      <div className="min-w-0 flex-1">
        {isEditing ? (
          /* ================= EDIT MODE ================= */
          <div className="space-y-3">
            {/* Title */}
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100 dark:border-slate-700 dark:bg-slate-800 dark:focus:ring-violet-950"
              placeholder="Task title"
            />

            {/* Type + Priority */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-violet-500 dark:border-slate-700 dark:bg-slate-800"
              >
                <option>React</option>
                <option>DSA</option>
                <option>Backend</option>
                <option>English</option>
              </select>

              <select
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-violet-500 dark:border-slate-700 dark:bg-slate-800"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            {/* Save */}
            <button
              onClick={() => {
                handleEdit(task.id, newTitle, newType, newPriority);
                setIsEditing(false);
              }}
              className="rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-700"
            >
              Save Changes
            </button>
          </div>
        ) : (
          /* ================= NORMAL MODE ================= */
          <>
            <span className="inline-block rounded-md bg-violet-100 px-2 py-1 text-xs text-violet-700 dark:bg-violet-950 dark:text-violet-300">
              {task.type}
            </span>

            <h3
              className={`mt-2 text-sm font-semibold ${
                task.completed ? "text-slate-400 line-through" : ""
              }`}
            >
              {task.title}
            </h3>

            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
              <span>📅 {task.date}</span>
              <span>🏷 {task.type}</span>
              <span>★ {task.priority}</span>
            </div>
          </>
        )}
      </div>

      {/* Actions */}
      <div className="flex shrink-0 gap-2">
        {isEditing ? (
          <button
            onClick={() => {
              setNewTitle(task.title);
              setNewType(task.type);
              setNewPriority(task.priority);
              setIsEditing(false);
            }}
            className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                setNewTitle(task.title);
                setNewType(task.type);
                setNewPriority(task.priority);
                setIsEditing(true);
              }}
              className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(task.id)}
              className="rounded-xl border border-red-200 px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950/30"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
