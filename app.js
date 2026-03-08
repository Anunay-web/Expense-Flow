const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
app.use(cors());
app.use(express.json()); 
app.get('/', (req, res) => {
  res.send('working....');
});``
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
module.exports = app;