import { useState } from "react";

function AddTask({ handleSubmit}) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskType, setTaskType] = useState("");
  const [taskPriority, setTaskPriority] = useState("");

  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <form
        onSubmit={(e) => handleSubmit(e, taskTitle, taskType, taskPriority)}
        className="flex flex-col gap-3 md:flex-row"
      >
        <input
          type="text"
          value={taskTitle} //just for connection
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="What do you want to study today?"
          className="flex-1 rounded-xl bg-slate-100 px-4 py-3 text-sm outline-none dark:bg-slate-800"
        />

        <select
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
          className="rounded-xl bg-slate-100 px-4 py-3 text-sm outline-none dark:bg-slate-800"
        >
          <option>Select Subject</option>
          <option>React</option>
          <option>DSA</option>
          <option>Backend</option>
          <option>English</option>
        </select>

        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
          className="rounded-xl bg-slate-100 px-4 py-3 text-sm outline-none dark:bg-slate-800"
        >
          <option>Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          type="submit"
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-700"
        >
          Add Task
        </button>
      </form>
    </section>
  );
}

export default AddTask;
