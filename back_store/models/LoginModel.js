//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const LoginModel = db.define('users', {
     user: { type: DataTypes.STRING },
     password: { type: DataTypes.STRING },
 })

 export default LoginModel