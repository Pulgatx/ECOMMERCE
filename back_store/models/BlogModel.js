//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const BlogModel = db.define('blogs', {
     name: { type: DataTypes.STRING },
     description: { type: DataTypes.STRING },
     price: { type: DataTypes.NUMBER },
     img1: {type: DataTypes.STRING },
     img2: {type: DataTypes.TEXT },
     img3: {type: DataTypes.TEXT },
     cantidad: {type: DataTypes.NUMBER }
 })

 export default BlogModel