//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const BlogModel = db.define('inventories', {
    productName: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.NUMBER },
    img1: {type: DataTypes.TEXT },
    img2: {type: DataTypes.TEXT },
    img3: {type: DataTypes.TEXT },
    stockMax: {type: DataTypes.INTEGER},
    stockMin: {type: DataTypes.INTEGER},
    stock: {type: DataTypes.INTEGER},
    cantidad: { type: DataTypes.NUMBER }
 })

 export default BlogModel