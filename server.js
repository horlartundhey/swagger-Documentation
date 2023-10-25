const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

const taskRoutes = require('./routes/taskRoutes');
const { swaggerSpec, swaggerUi } = require('./swagger');

app.use(express.json()); // Parse JSON requests

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(taskRoutes); // Use the task router

const uri = 'mongodb+srv://horlartundhey:42P9NV5uxsIVnCxW@cluster0.2g0ay80.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
