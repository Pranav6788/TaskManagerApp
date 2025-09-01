const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
// const authRoutes = require("./routes/auth");


const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const taskRoutes = require("./routes/tasks");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", taskRoutes);
// app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
