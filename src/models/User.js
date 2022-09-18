import dbConnection from "../services/dbConnection";
import mongoose from "mongoose";

dbConnection();

const userSchema = mongoose.Schema({
    name: {type: String, required: true, min: 3 , max: 200},
    email: {type: String, unique: true, required: true, min: 3 , max: 200},
    password: {type: String, unique: true, required: true, min: 3 , max: 200},
    applications: {type: mongoose.Schema.Types.ObjectId, min: 3 , max: 200},
    createdUser: {type: Date, default: Date.now()},
    age: {type: String, required:true}
});

const userModel =  mongoose.models.user || mongoose.model('user', userSchema);


export default userModel;