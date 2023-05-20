import express from "express";
import cors from "cors";
import AdminRoute from "./routes/AdminRoute.js";
import ReservationRoute from "./routes/ReservationRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(AdminRoute);
app.use(ReservationRoute);

app.listen(3000, ()=> console.log('Server up and running...'));