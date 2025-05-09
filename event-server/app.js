const express = require("express");
const cors = require("cors");
const path = require("path");

const eventsRoutes = require("./routes/events.routes");
const usersRoutes = require("./routes/users.routes");
const departmentsRoutes = require("./routes/departments.routes");
const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./utils/errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../notific/build")));

// Routes
app.use("/events", eventsRoutes);
app.use("/users", usersRoutes);
app.use("/departments", departmentsRoutes);
app.use("/login", authRoutes);

// Error handler
app.use(errorHandler);

module.exports = app;
