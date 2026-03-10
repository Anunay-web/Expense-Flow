const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const testRoute = require('./routes/test.route');
const expenseRoute = require('./routes/expense.route');
app.use(cors());
app.use(express.json()); 
app.get('/', (req, res) => {
  res.send('working....');
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/test', testRoute);
app.use('/api/expenses', expenseRoute);
module.exports = app;