import mongoose from "mongoose";
import dbConnection from "../services/dbConnection";

dbConnection();

const empresaSchema = mongoose.Schema({
    name: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId , required: true},
    vagas: {type: mongoose.Schema.Types.ObjectId, default: []},
    tamanho: {type: String, required: true},
    createdDate: {type: Date, default: Date.now()}
})

const empresaModel = mongoose.model('empresa', empresaSchema);

export default empresaModel;