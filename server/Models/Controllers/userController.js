const userModel = require("../Routes/Models/userModel");
const bycrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    const jwtKey = process.env.JWT_KEY

    return jwt.sign({_id}, jwtKey,{expiresIn: "3d"} )
}

const registerUser = async(req,res) =>{

    try{

        const {name, email, password} = req.body;
        let user = await userModel.findOne({email});
    
        if(user) return res.status(400).json("Cet email est déjà existant")
    
        if (!name || !email || !password) return res.status(400).json("Tout les champs sont requis")
        
        if(!validator.isEmail(email)) return res.status(400).json("Veuillez entrer un email valide")
    
        if(!validator.isStrongPassword(password)) return res.status(400).json("Mot de passe non conforme aux règles de sécurités")
    
        user = new userModel({name,email,password})
    
        const salt = await bycrypt.genSalt(10)
        user.password = await bycrypt.hash(user.password, salt)
    
        await user.save()
    
        const token = createToken(user._id)
    
        res.status(200).json({_id: user._id,name,email,token })
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

const loginUser = async(req,res) => {
    const {email, password} = req.body;
    
    try{
        let user = await userModel.findOne({email});

        if(!user) return res.status(400).json("Email ou mot de passe invalide")

        const isValidPassword = await bycrypt.compare(password, user.password)

        if(!isValidPassword) return res.status(400).json("Mot de passe invalide")

        const token = createToken(user._id)
        res.status(200).json({_id: user._id,name: user.name,email,token })
            

    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

const findUser = async(req,res) =>{
    const userId = req.params.userId;
    try{
        const user = await userModel.findById(userId);
        res.status(200).json(user);
    }catch(error){
        console.log(error);
        return res.status(500).json(error);
    }
}

const getUsers = async(req,res) =>{
    try{
        const users = await userModel.find();
        res.status(200).json(users);
    }catch(error){
        console.log(error);
        return res.status(500).json(error);
    }
}

module.exports = {registerUser, loginUser, findUser, getUsers};