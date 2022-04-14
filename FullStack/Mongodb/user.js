const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    matricule: Number
})
const User = mongoose.model('User', userSchema);

async function CreateUser(fn, ln, em, mat){
    
    try{
        const user = await User.create({
            firstName: fn,
            lastName: ln,
            email: em,
            matricule: mat
        });
        console.log("Created successfully");
        return user
    }catch(err){
        console.log(err);
        return null
    }
}

async function getByName(name){ 
    try{
        return await User.where("firstName").equals(name)
    }catch(err){
        console.log(err);
        return null
    }
}
async function getByLastName(name){ 
    try{
        return await User.where("lastName").equals(name)
    }catch(err){
        console.log(err);
        return null
    }
}
async function getByMail(mail){ 
    try{
        return await User.where("email").equals(mail)
    }catch(err){
        console.log(err);
        return null
    }
}
async function getByMatricule(mat){ 
    try{
        return await User.where("matricule").equals(mat)
    }catch(err){
        console.log(err);
        return null
    }
}

module.exports = {User, CreateUser, getByName, getByLastName, getByMail, getByMatricule};