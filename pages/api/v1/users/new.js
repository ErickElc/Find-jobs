import userModel from "../../../../src/models/User";
import bscrypt from 'bcryptjs';

const saltKey = bscrypt.genSaltSync(10);

export default async function createUser(req, res){
    const { method } = req;
    const emailExist = await userModel.findOne({ email: req.body.email});
    if(emailExist) return res.status(400).send("Não foi possível cadastrar esse e-mail, pois ele já foi cadastrado!");
    const cryptPassword = bscrypt.hashSync(req.body.password, saltKey);
    const userRegister = new userModel({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: cryptPassword,
    });
    switch (method) {
        case 'POST':
            try {
                userRegister.save();
                res.status(201).send('Conta Criada com sucesso!');
            } catch (error) {
                res.status(500).send('Não foi possível criar a conta!');
            }
    }

}