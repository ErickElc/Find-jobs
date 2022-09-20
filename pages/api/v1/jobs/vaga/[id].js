import vagasModel from "../../../../../src/models/Vagas";
import jwt from 'jsonwebtoken'


export default async function vagasController(req, res){
    const {method} = req;
    const {id} = req.query;

    switch(method){
        case 'PUT':
            try {
                const vagaSelected = await vagasModel.findOne({_id: id});
                const authorization = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
                if(authorization._id != vagaSelected._id) return res.status(403).send('Não tem autorização!');
                await vagasModel.findOneAndUpdate({_id: id}, {$set: {

                }});
                res.status(200).send('Documento editado com sucesso!');
            } catch (error) {
                res.status(400).send('Não foi possível executar esse comando!')
            }
        case 'DELETE':
            try {
                
            } catch (error) {
                
            }
    }
}