//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const LoginModel = db.define('users', {
    username: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    adress: {type: DataTypes.STRING},
    telephone: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING},
 })

 export default LoginModel