import cliente from "../Models/cliente";
import { json } from "sequelize/types";

export const getCliente = async (req , res) => {
    const cliente = await cliente.findAll();

    if (cliente) {
        res.json(cliente);
    }else{
        res.status(404).json({
            msg: 'no existen'
        })
    }
}