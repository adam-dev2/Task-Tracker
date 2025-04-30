const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


router.get('/', async (req, res) => {
  try {
    const getAllTasks = await Task.find();
    return res.status(200).json({ message: "Tasks fetched successfully", tasks: getAllTasks });
  } catch (err) {
    return res.status(500).json({ message: 'Error while fetching tasks', error: err.message });
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    return res.status(200).json({ message: 'Task fetched successfully', task });
  } catch (err) {
    return res.status(500).json({ message: 'Error while fetching task', error: err.message });
  }
});


router.post('/create', async (req, res) => {
  const { title, description, status, completedAt } = req.body;

  try {
    const newTask = new Task({
      title,
      description,
      status: status || 'Pending',  
      completedAt: completedAt || null
    });

    await newTask.save();
    return res.status(201).json({ message: 'Task created successfully', task: newTask });
  } catch (err) {
    return res.status(500).json({ message: 'Error while creating task', error: err.message });
  }
});


router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, status, completedAt } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, status, completedAt },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
  } catch (err) {
    return res.status(500).json({ message: 'Error while updating task', error: err.message });
  }
});


router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Error while deleting task', error: err.message });
  }
});

module.exports = router;
