import TaskCard from "./TaskCard";

function TaskList({ tasks, completeClickHandler, handleDelete, handleEdit}) {
  return (
    <section className="space-y-3">
      {tasks.map((task) => {
        return (
          <TaskCard
            key={task.id}
            task={task}
            completeClickHandler={completeClickHandler}
            handleDelete={handleDelete}
            handleEdit = {handleEdit}
          />
        );
      })}
    </section>
  );
}

export default TaskList;
