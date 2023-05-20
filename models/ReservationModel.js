import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Reservation = db.define('reservations', {
    customer_name: DataTypes.STRING,
    reservation_date: DataTypes.DATEONLY,
    reservation_time: DataTypes.TIME,
    party_size: DataTypes.INTEGER,
    contact_number: DataTypes.STRING,
    special_requests: DataTypes.TEXT
}, {
    freezeTableName:true
});

// generate otomatis jika belum ada di db
export default Reservation;

(async()=>{
    await db.sync()
})();