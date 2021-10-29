
import { generateResponse } from "../../helpers/generateResponse";

export const postCliente = (event,context ) => {
const {}
    try {

        const {nombre,apellido,email,password,telefono_numero,curp,sexo,edad} = JSON.parse(event['body'])
        const existEmail = await cliente.finOne({
            where: {
                email:body.email
            }
        });

        if (existEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con ese Coreeo' + body.email
            })
        }

        const data ={nombre,apellido,email,password,telefono_numero,curp,sexo,edad}

        const resp = await Cliente.create(data);
        return generateResponse(200,{message: "se registro correctamento",user: resp.dataValue})

    }catch(e) {
        if(e.statusCode) return e;
        return generateResponse(500,{message:e})
    }

}