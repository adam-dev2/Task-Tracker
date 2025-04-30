const express = require('express');
const router = express.Router();
const Project = require('../models/Project');


router.get('/', async (req, res) => {
  try {
    const getAllProjects = await Project.find();
    return res.status(200).json({ message: "Projects fetched successfully", projects: getAllProjects });
  } catch (err) {
    return res.status(500).json({ message: 'Error while fetching projects', error: err.message });
  }
});


router.post('/create', async (req, res) => {
  const { name } = req.body;
  try {
    const findProject = await Project.findOne({ name });
    if (findProject) {
      return res.status(400).json({ message: 'Project with this name already exists' });
    }

    const newProject = new Project({ name });
    await newProject.save();

    return res.status(201).json({ message: 'Successfully created the project', project: newProject });
  } catch (err) {
    return res.status(500).json({ message: 'Error while creating project', error: err.message });
  }
});

router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    return res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
  } catch (err) {
    return res.status(500).json({ message: 'Error while editing the project', error: err.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    return res.status(200).json({ message: 'Project deleted successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Error while deleting the project', error: err.message });
  }
});

module.exports = router;
