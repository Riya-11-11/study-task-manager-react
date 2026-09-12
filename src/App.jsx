import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Stats from "./components/Stats";
import AddTask from "./components/AddTask";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import RightPanel from "./components/RightPanel";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Build the StudyFlow UI",
      type: "React",
      date: "Today",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Solve array problems",
      type: "DSA",
      date: "Today",
      priority: "Medium",
      completed: true,
    },
    {
      id: 3,
      title: "practice authentication",
      type: "Backend",
      date: "Today",
      priority: "Medium",
      completed: true,
    },
  ]);

  const completeClickHandler = (id) => {
    setTasks((prevVal) => {
      return prevVal.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  };

  const handleSubmit = (e, title, type, priority) => {
    e.preventDefault();

    setTasks((prevVal) => {
      return [
        ...prevVal,
        {
          title: title,
          type: type,
          priority: priority,
          id: Date.now(),
          completed: false,
          date: "Today",
        },
      ];
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-white lg:grid lg:grid-cols-[220px_1fr_280px]">
      <Sidebar />

      <main className="min-w-0 bg-white px-5 py-6 dark:bg-slate-950 md:px-8">
        <Topbar />

        {/* Greeting */}
        <section className="my-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">
              Good Morning, Riya 👋
            </h1>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Keep learning. Your future self will thank you.
            </p>
          </div>

          <p className="hidden text-sm italic text-violet-500 md:block">
            Progress, not perfection.
          </p>
        </section>

        <Stats />

        <AddTask handleSubmit={handleSubmit} />

        <TaskFilters />

        <TaskList tasks={tasks} completeClickHandler={completeClickHandler} />
      </main>

      <RightPanel />
    </div>
  );
}

export default App;
