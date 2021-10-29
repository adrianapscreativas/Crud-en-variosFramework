

import { json } from "sequelize/types";
import { Datosbancarios } from "../../Models";

export const findOne = async (req , res) => {
    const {id} = req.params;
    const banco = await Datosbancarios.findbyPK(id);

    if (banco) {
        res.json(banco);
    }else{
        res.status(404).json({
            msg: 'no existe el registro'
        })
    }
}