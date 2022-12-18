import bcrypt from "bcrypt"
import Paciente from "../models/Paciente.js"

export default async function login(req, res){
    

    try{
        const {usuario, password} = req.body

        const document = await Paciente.findOne({"usuario": usuario})

        if(document != null){
            const access = await bcrypt.compare(password, document.clave)

            if(access){
                const usuarioID ={_id: document._id}
                res.status(200).json({message: "Bienvenido"})
            }
        }else{
            res.status(401).json({message: "Usuario o contraseña incorrectos"})
        }

    }catch (error){
        res.status(400).json(error.message)

    }
}