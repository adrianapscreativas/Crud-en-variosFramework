'use strict';
const {Datosbancarios} = require('../../Models/datosBancarios');
const {generateResponse} = require('../../helpers/generateResponse');
const { Datosbancarios } = require('../../Models');
const Getall  = async (event, context) => {
    try{
        
        
        const resp = await Datosbancarios.findAll();

        return generateResponse(200,{message: "se registro correctamento",user: resp.dataValue})

            
    }catch(e) {
        console.log(e)
        return generateResponse(500, {message: "error en la peticion"})
    }

}

module.exports.Getall = Getall;