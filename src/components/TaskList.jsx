import TaskCard from "./TaskCard";
import { useState } from "react";

function TaskList() {
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
          return{...task, completed:!task.completed}
        }
        return task;
      });
    });
  };

  return (
    <section className="space-y-3">
      {tasks.map((task) => {
        return (
          <TaskCard
            key={task.id}
            task={task}
            completeClickHandler={completeClickHandler}
          />
        );
      })}
    </section>
  );
}

export default TaskList;
