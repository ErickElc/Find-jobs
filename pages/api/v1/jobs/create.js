import userModel from "../../../../src/models/User";
import vagasModel from "../../../../src/models/Vagas";
import jwt from 'jsonwebtoken'

export default async function createJob(req, res){
    const {method} = req;
    const createVaga = new vagasModel(req.body);
    const authorization = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
    switch(method){
        case 'POST':
            try {
                const selectedUser = await userModel.findOne({email: req.body.email});
                if(selectedUser._id != authorization._id) return res.status(403).send('Não tem permissão');
                await createVaga.save();
                res.status(201).send('Vaga Criada com sucesso!');
            
            } catch (error) {
                res.status(400).send('não foi possível criar a vaga');
            } 
    }
}
