//importamos el Modelo
import ProductModel from "../models/ProductModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllProducts = async (req, res) => {
    try {
        const Products = await ProductModel.findAll()
        res.json(Products)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getProduct = async (req, res) => {
        try {
            const Product = await ProductModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(Product[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createProduct = async (req, res) => {
    try {
       await ProductModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateProduct = async (req, res) => {
    try {
        await ProductModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const bookProduct = async (req, res) => {
    try {
        console.log(productsStock);
        if (req.query.f === 'unbook'){
            productsStock[req.params.id]++;
            return res.json('Unbooked');
        } else if (req.query.f === 'book') {
            if (productsStock[req.params.id] == 0) return res.json('Stockout')
            productsStock[req.params.id]--;
            return res.json('Booked');
        } 
        res.status(400).json('Bad request');
    } catch (error) {
        res.json({message: error.message});
    }
}

export const buyProducts = async (req, res) => {
    try {
        console.log(typeof(req.body));
        Object.keys(req.body).forEach(product => updateContent(product, req.body));
        res.json("Successful purchase");
    } catch (error) {
        res.json(error.message);   
    }
}