const express = require('express')
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middleware
        this.middelwares();

        //Rutas de la App
        this.routes();
    }

    middelwares() {
        this.app.use(cors()); //Cors

        this.app.use(express.json() ); //lectura y parseo del Body

        this.app.use(express.static('public')) //Directorio publico
    }



    routes() {
        
        this.app.use(this.usuariosPath,require('../routes/usuarios'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }

}


module.exports = Server;