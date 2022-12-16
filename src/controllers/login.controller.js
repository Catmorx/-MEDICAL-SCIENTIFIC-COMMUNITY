import bcrypt from "bcrypt"
import userModel from "../models/User.js"

export default async function login(req, res){
    

    try{
        const {user, password} = req.headers

        const document = await userModel.findOne({"usuario": user})
        console.log(document)
        if(document != null){
            const documentPassword = document.contraseña
            const acces = await bcrypt.compare(password, documentPassword)

            if(acces){
                res.json({"message": "Bienvenido"})
            }
        }else{
            res.status(401)
        }

    }catch (error){
        res.status(401).json(error.message)

    }
}