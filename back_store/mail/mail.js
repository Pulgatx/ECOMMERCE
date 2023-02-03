import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'cristyant2003@gmail.com',
        pass: 'tdbzwgdhqybsihdf'
    }
});

export const sendMail = prod => {
    transporter.sendMail({
        from: "ecommerce <ecommerce@gmail.com",
        to: "c.arango1@utp.edu.co",
        subject: "SE HA LLEGADO AL STOCK MINIMO",
        text: `EL PRODUCTO CON EL ID ${prod.id} HA LLEGADO A SU STOCK MINIMO.`
    }).then(console.info)
    .catch(console.catch)
}