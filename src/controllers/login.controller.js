import bcrypt from "bcrypt"
import  config from "../config.js"
import jwt from "jsonwebtoken";
import Paciente from "../models/Paciente.js"

export default async function login(req, res){
    

    try{
        const {usuario, password} = req.body

        const document = await Paciente.findOne({"usuario": usuario})

        if(document != null){
            const access = await bcrypt.compare(password, document.clave)

            if(access){
                const token =jwt.sign({id: document._id}, config.secretKey, {
                    expiresIn: 86400,
                });
                console.log(token);
                res.status(200).json({message: "Bienvenido", token})
            }
        }else{
            res.status(401).json({message: "Usuario o contraseña incorrectos"})
        }

    }catch (error){
        res.status(400).json(error.message)

    }
}