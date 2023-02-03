import {Sequelize} from 'sequelize'

const db = new Sequelize('e-commerce','pulg4tx1','cristyan115',{
    host:'pulgatx.com.mialias.net',
    dialect: 'mysql'
})

export default db;
