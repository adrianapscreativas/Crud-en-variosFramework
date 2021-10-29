import cliente from "../Models/cliente";
import { json } from "sequelize/types";

export const deleteCliente = async (req , res) => {
    const {id} = req.params;

    const cliente = await cliente.findbyPK(id);

    if (!cliente) {
        return res.status(404).json({
            msg: ' no existe usuario con ese ID'
       })
    }
    await cliente.destroy({
        where: {id:req.params.id}
    })

    res.json({
        succes: ' Se ha borrado'
    })

}