import {Task} from "../models/task.model.js";

// @desc Get tasks (optionally filtered by category)
// @route GET /tasks
export const getTasks = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = { userId: req.user.userId };

    if (category) {
      filter.category = category;
    }

    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Create task
// @route POST /tasks
export const createTask = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    const task = new Task({
      userId: req.user.userId,
      title,
      description,
      category,
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Update task (mark done or edit)
// @route PATCH /tasks/:id
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndUpdate(
      { _id: id, userId: req.user.userId },
      req.body,
      { new: true }
    );

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Delete task
// @route DELETE /tasks/:id
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndDelete({ _id: id, userId: req.user.userId });

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
