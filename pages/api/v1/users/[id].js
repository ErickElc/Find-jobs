import userModel from "../../../../src/models/User";
import jwt from "jsonwebtoken";
export default async function ControllerUser(req, res){
    const {id} = req.query;
    const {method} = req;
    switch(method){
        case 'PUT':
            try {
                const userSelected = await userModel.findOne({_id: id});
                const authorization = jwt.verify(req.body.token, process.env.SECRET_TOKEN);
                if(userSelected._id != authorization._id) return res.status(403).send('Não possui autorização');
                await userModel.findOneUpdate({email: userSelected.email},{$set: {
                    name: req.body.name,
                    age: req.body.age,
                    email: req.body.email,
                    password: req.body.password
                }});
                res.status(200).send('Usuário editado com sucesso!');
            } catch (error) {
                res.status(500).send('Não foi possível editar o usuário');                
            }
        case 'DELETE':
            try {
                const userSelected = await userModel.findOne({_id: id});
                const authorization = jwt.verify(req.body.token, process.env.SECRET_TOKEN);
                if(userSelected._id != authorization._id) return res.status(403).send('Não possui autorização');
                await userModel.findOneDelete({_id: userSelected});
                res.status(200).send("Usuário deletado com sucesso!");
            } catch (error) {
                res.status(500).send('Não foi possível deletar o usuário!');
            }
    }
}