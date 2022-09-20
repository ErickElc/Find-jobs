import mongoose from "mongoose";
import dbConnection from "../services/dbConnection";

dbConnection();

const vagasSchema = mongoose.Schema({
    title: {type: String, required: true, min: 3, max: 250},
    nivel: {type: String, required: true},  // jr, pl , Sr
    description: {type: String, required: true, min: 3, max: 250},
    empresaName: {type: String, required: true, min: 4, max: 250},
    candidatosId: {type: mongoose.Schema.Types.ObjectId, ref: 'candidato', default: []},
    area: {type: String, required: true, min: 4, max: 250},
    createdDate: {type: Date, default: Date.now()}
});

const vagasModel = mongoose.model('vagas', vagasSchema);

export default vagasModel;
