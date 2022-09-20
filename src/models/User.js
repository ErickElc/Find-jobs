import dbConnection from "../services/dbConnection";
import mongoose from "mongoose";

dbConnection();

const userSchema = mongoose.Schema({
    name: {type: String, required: true, min: 3 , max: 200},
    email: {type: String, unique: true, required: true, min: 3 , max: 200},
    password: {type: String, unique: true, required: true, min: 3 , max: 200},
    vagasID: {type: mongoose.Schema.Types.ObjectId, ref: 'vagas', min: 3 , max: 200, default: []},
    createdDate: {type: Date, default: Date.now()},
});

const userModel =  mongoose.models.user || mongoose.model('user', userSchema);


export default userModel;