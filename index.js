import express from "express";
import cors from "cors";
import AdminRoute from "./routes/AdminRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(AdminRoute);

app.listen(3000, ()=> console.log('Server up and running...'));