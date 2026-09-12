import TaskCard from "./TaskCard";
import { useState } from "react";

function TaskList({ tasks, completeClickHandler }) {

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
