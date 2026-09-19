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
  const { tasks } = req.body;

  try {
    res.status(201).json({
      message: "Task has added successfully",
      data: { tasks },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

//read data from server
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

export default router;
