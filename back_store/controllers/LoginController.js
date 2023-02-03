//importamos el Modelo
import LoginModel from "../models/LoginModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllLogin = async (req, res) => {
    try {
        const login = await LoginModel.findAll()
        res.json(login)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getLogin = async (req, res) => {
        try {
            const login = await LoginModel.findAll({
                where:{ username: req.body.username,
                        password: req.body.password}
            })
                res.json(login[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createLogin = async (req, res) => {
    try {
       await LoginModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateLogin = async (req, res) => {
    try {
        await LoginModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}