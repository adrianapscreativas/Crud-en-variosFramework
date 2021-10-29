import cliente from "../../Models/cliente";
import { json } from "sequelize/types";

export const findOneCliente = async (req , res) => {
    const {id} = req.params;
    const cliente = await cliente.findbyPK(id);

    if (usuario) {
        res.json(usuario);
    }else{
        res.status(404).json({
            msg: 'no existe el usuario'
        })
    }
}