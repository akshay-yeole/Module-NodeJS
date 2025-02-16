const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');
const notFoundHandler = require('./middlewares/notFoundHandler');

const app = express();

app.use(express.json());

// ✅ User Routes
app.use('/api/users', userRoutes);

// ✅ 404 Not Found Middleware
app.use(notFoundHandler);

// ✅ Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
