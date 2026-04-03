require("dotenv").config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const app = express();
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const testRoute = require('./routes/test.route');
const expenseRoute = require('./routes/expense.route');
const errorHandler = require('./middleware/errorMiddleware');
app.use(cors());
app.use(express.json()); 
app.use(morgan('dev'));
app.get('/', (req, res) => {
  res.send('working....');
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/test', testRoute);
app.use('/api/expenses', expenseRoute);
app.use(errorHandler);



module.exports = app;