const express = require('express');
const app = express();
const path = require('path');
const port = 4000;
const routes = require('./routes/todo');
const { mongoConnect } = require('./database/database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

// Connect to DB first, then start server
mongoConnect()
  .then(() => {
    console.log('Connected successfully to server from app');

    try {
      app.listen(port, () => {
        console.log(`✅ Server is running on http://localhost:${port}`);
      });
    } catch (err) {
      console.error('❌ Server failed to start:', err.message);
    }
  })
  .catch((err) => {
    console.log('❌ MongoDB connection failed:', err.message);
  });
