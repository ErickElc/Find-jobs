import userModel from "../../../../src/models/User";
import bscrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export default async function loginUser(req, res){
    const { method } = req;
    switch (method) {
        case 'POST':
            try {
                const userSelected = await userModel.findOne({email: req.body.email});
                if(!userModel) return res.status(400).send('Usuário não encontrado!');
                const passwordMatch = bscrypt.compareSync(req.body.password, userSelected.password);
                if(!passwordMatch) return res.status(400).send('email ou senha incorretos!');
                const token = jwt.sign({id: userSelected._id}, process.env.TOKEN_SECRET, {expiresIn: 86400});
                res.status(202).send({token: token});
            } catch (error) {
                res.status(500).send('Não foi possível fazer o login!');
            }
    }
}