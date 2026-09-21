import express from "express";

const router = express.Router();

const tasks = [
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
];

router.post("/api/tasks", (req, res) => {
  const { title, type, priority } = req.body;

  try {
    const newTask = {
      id: Date.now(),
      title,
      type,
      priority,
      date: "Today",
      completed: false,
    };

    tasks.push(newTask);
    res.status(201).json({
      message: "Task has added successfully",
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

//reads data from server
router.get("/api/tasks", (req, res) => {
  try {
    res.status(200).json({
      message: "Tasks fetched successfully",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

router.patch("/api/tasks/:id", (req, res) => {
  const id = req.params.id; //string
  const { title, type, priority } = req.body;

  try {
    const task = tasks.find((task) => {
      if (Number(id) === task.id) {
        return task;
      }
    });

    const updatedTask = tasks.map((task) => {
      if (task.id === Number(id)) {
        return {
          ...task,
          title,
          type,
          priority,
        };
      }

      return task;
    });

    if (!task) {
      return res.status(404).json({
        message: "Task Doesn't exists",
      });
    }

    tasks.splice(0, tasks.length, ...updatedTask);

    res.status(200).json({
      message: "Task updated successfully",
      data: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

router.delete("/api/tasks/:id", (req, res) => {
  const id = req.params.id;
  try {
    const task = tasks.find((task) => {
      if (Number(id) === task.id) {
        return task;
      }
    });

    const deletedTask = tasks.filter((task) => {
      if (Number(id) !== task.id) {
        return task;
      }
    });

    if (!task) {
      return res.status(404).json({
        message: "Task Doesn't exists",
      });
    }
    tasks.splice(0, tasks.length, ...deletedTask);

    res.status(200).json({
      message: "Task deleted sUccessfully ",
      data: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

export default router;
