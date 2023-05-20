import Reservation from "../models/ReservationModel.js";

export const getReservations = async(req, res)=> {
    try {
        const response = await Reservation.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getReservationById = async(req, res)=> {
    try {
        const response = await Reservation.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createReservation = async(req, res)=> {
    try {
        await Reservation.create(req.body);
        res.status(201).json({msg: "Reservation Success"}); //disini klo mau hasilnya pop up(?)
    } catch (error) {
        console.log(error.message);
    }
}

export const updateReservation = async(req, res)=> {
    try {
        await Reservation.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Reservation Updated"}); //ini emng si user yg mesan bisa liat list reservasi dia(?)
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteReservation = async(req, res)=> {
    try {
        await Reservation.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Reservation Deleted"}); //ini juga, buat si admin kah(?)
    } catch (error) {
        console.log(error.message);
    }
}