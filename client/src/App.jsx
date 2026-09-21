import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Stats from "./components/Stats";
import AddTask from "./components/AddTask";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import RightPanel from "./components/RightPanel";
import { useEffect, useState } from "react";

// const initialTasks = [
//   {
//     id: 1,
//     title: "Build the StudyFlow UI",
//     type: "React",
//     date: "Today",
//     priority: "High",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "Solve array problems",
//     type: "DSA",
//     date: "Today",
//     priority: "Medium",
//     completed: true,
//   },
//   {
//     id: 3,
//     title: "practice authentication",
//     type: "Backend",
//     date: "Today",
//     priority: "Medium",
//     completed: true,
//   },
// ];

function App() {
  // const lsd = localStorage.getItem("tasks");
  // const lsdData = JSON.parse(lsd);
  // const [tasks, setTasks] = useState(lsd ? lsdData : initialTasks);

  // const [tasks, setTasks] = useState(() => {
  //   const lsd = localStorage.getItem("tasks");

  //   if (lsd) {
  //     return JSON.parse(lsd);
  //   }

  //   return initialTasks;
  // });

  const [tasks, setTasks] = useState([]);

  const [taskFilters, setTaskFilters] = useState("All");

  const [searchTask, setSearchTask] = useState("");

  const [lastUpdated, setLastUpdated] = useState(null);

  // Update last updated time whenever tasks change
  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString());
  }, [tasks]);

  // Complete / uncomplete task
  const completeClickHandler = (id) => {
    setTasks((prevVal) => {
      return prevVal.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      });
    });
  };

  // Add new task using POST API
  const handleSubmit = async (e, title, type, priority) => {
    e.preventDefault();

    if (title === "" || type === "" || priority === "") {
      return;
    }

    const res = await fetch("/api/tasks", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title,
        type,
        priority,
      }),
    });

    const data = await res.json();

    setTasks((prevVal) => {
      return [...prevVal, data.data];
    });
  };

  // Get all tasks when app loads
  useEffect(() => {
    const fetchedTasks = async () => {
      const res = await fetch("/api/tasks");

      const data = await res.json();

      setTasks(data.data);
    };

    fetchedTasks();
  }, []);

  // Edit task

  const handleEdit = async (id, newTitle, newType, newPriority) => {
    const res = await fetch(`/api/tasks/${id}`, {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: newTitle,
        type: newType,
        priority: newPriority,
      }),
    });

    const data = await res.json();

    setTasks(data.data);
  };

  // Delete task
  const handleDelete = async (id) => {
    const res = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    setTasks(data.data);
  };

  

  // Change filter
  const handleFilter = (filter) => {
    setTaskFilters(filter);
  };

  // Filter tasks
  let filteredTask = tasks;

  if (taskFilters === "All") {
    filteredTask = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTask.toLowerCase()),
    );
  } else if (taskFilters === "Pending") {
    filteredTask = tasks.filter(
      (task) =>
        task.completed === false &&
        task.title.toLowerCase().includes(searchTask.toLowerCase()),
    );
  } else if (taskFilters === "Completed") {
    filteredTask = tasks.filter(
      (task) =>
        task.completed === true &&
        task.title.toLowerCase().includes(searchTask.toLowerCase()),
    );
  } else if (taskFilters === "High") {
    filteredTask = tasks.filter(
      (task) =>
        task.priority === "High" &&
        task.title.toLowerCase().includes(searchTask.toLowerCase()),
    );
  } else if (taskFilters === "Medium") {
    filteredTask = tasks.filter(
      (task) =>
        task.priority === "Medium" &&
        task.title.toLowerCase().includes(searchTask.toLowerCase()),
    );
  } else if (taskFilters === "Low") {
    filteredTask = tasks.filter(
      (task) =>
        task.priority === "Low" &&
        task.title.toLowerCase().includes(searchTask.toLowerCase()),
    );
  }

  // Statistics
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => {
    return task.completed === true;
  }).length;

  const pendingTasks = tasks.filter((task) => {
    return task.completed === false;
  }).length;

  let progress;

  if (totalTasks === 0) {
    progress = 0;
  } else {
    progress = Math.floor((completedTasks / totalTasks) * 100);
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-white lg:grid lg:grid-cols-[220px_1fr_280px]">
      <Sidebar />

      <main className="min-w-0 bg-white px-5 py-6 dark:bg-slate-950 md:px-8">
        <Topbar searchTask={searchTask} setSearchTask={setSearchTask} />

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

        <Stats
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
          progress={progress}
        />

        {/* Last Updated */}
        <section className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-3 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last updated
          </p>

          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            {lastUpdated ? lastUpdated : "Not updated yet"}
          </p>
        </section>

        <AddTask handleSubmit={handleSubmit} />

        <TaskFilters taskFilters={taskFilters} handleFilter={handleFilter} />

        <TaskList
          tasks={filteredTask}
          completeClickHandler={completeClickHandler}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>

      <RightPanel
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        pendingTasks={pendingTasks}
        progress={progress}
      />
    </div>
  );
}

export default App;
