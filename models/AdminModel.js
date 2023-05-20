import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Admin = db.define('admins', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    freezeTableName:true
});

// generate otomatis jika belum ada di db
export default Admin;

(async()=>{
    await db.sync()
})();