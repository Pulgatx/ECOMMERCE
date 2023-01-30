// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
    access_token: "TEST-1476143548401444-013009-1a4557acdff952204a36012cb3d94446-1044396861",
});

// Crea un objeto de preferencia
let preference = {
    items: [{
            title: "Mi producto",
            unit_price: 100,
            quantity: 1,
        }   
    ],
    back_urls: {
			"success": "http://google.com/",
			"failure": "http://facebook.com/",
			"pending": "http://instagram.com/"
		},
		auto_return: "approved",
};

mercadopago.preferences.create(preference)
    .then(function (response) {
        // Este valor reemplazará el string "<%= global.id %>" en tu HTML
        global.id = response.body.id;
    })
    .catch(function (error) {
        console.log(error);
    });


    