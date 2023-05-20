import express from "express";
import { 
    getReservations, 
    getReservationById,
    createReservation,
    updateReservation,
    deleteReservation
} from "../controllers/ReservationController.js";

const router = express.Router();

router.get('/reservations', getReservations);
router.get('/reservations/:id', getReservationById);
router.post('/reservations', createReservation); // mau route-nya jadi create-reservation kah(?)
router.patch('/reservations/:id', updateReservation);
router.delete('/reservations:id', deleteReservation);


export default router;