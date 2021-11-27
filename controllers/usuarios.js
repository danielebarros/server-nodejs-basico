const {response, request}= require('express');


const usuariosGet = (req = request, res = response) => {

    //const query = req.query;
    const {q,nombre,apikey,page=1,limit} = req.query;

    res.json({
        msg: 'GET API - Controlador',
        //query
        q,
        nombre,
        apikey,
        page,
        limit
    })
};

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'POST API - Controlador',
        nombre,
        edad
    })
};

const usuariosPut = (req, res = response) => {
    const {id} = req.params;

    res.status(400).json({
        msg: 'PUT API - Controlador',
        id
    })
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'PATCH API - Controlador'
    })
};

const usuariosDelete =(req, res = response) => {
    res.json({
        msg: 'DELETE API - Controlador'
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    
}