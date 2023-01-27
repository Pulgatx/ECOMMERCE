import {Sequelize} from 'sequelize'

const db = new Sequelize('ecommerce', 'root', '',{
    host:'localhost',
    dialect: 'mysql',
    port: 8889,
    username: 'root',
    password: 'root'
})

export default db;