const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./utils/db');
require('dotenv');

const authRoutes = require('./routes/authRoutes')
const projectRoutes = require('./routes/projectRoutes')
const taskRoutes = require('./routes/taskRoutes')

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
connectDB();

app.use('/api/auth',authRoutes);
app.use('/api/project',projectRoutes);
app.use('/api/task',taskRoutes)


app.listen(PORT,()=>{
    console.log(`Server is listening on port: ${PORT}`);
})