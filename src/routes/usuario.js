const express =  require('express'); 
const router = express.Router();

const producto = require('../modelo/usuario');

//const fetch = require('node-fetch');

router.get('/', /*async*/ (req, res) => {

    res.render("usuario", {
        arrayUsuario: [
            {
                // id:'',
                // nombre:'',
                // apellido:'',
                // dni:'',
                // usuario:'',
                // contrasena:''
            }
        ]
    })


    //const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //const data = await response.json();
   // res.json(data);
});

router.post('/', (req,res) => {
    res.render("usuario")

})

module.exports = router;

//usuario va a generar la ruta a metodos>usuario>get / post / etc. y va a ejecutar los metodos segun de los pida