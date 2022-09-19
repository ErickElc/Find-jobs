import userModel from "../../../../../src/models/User";


export default async function users_data(req , res){
    const { id } = req.query;
    const { method } = req;

    switch(method){
        case "GET":
            try {
                const selectedUser = await userModel.findOne({_id: id});
                if(!selectedUser) return res.status(400).send('Esse usuário não existe!');
                const data = {
                    name: selectedUser.name,
                    age: selectedUser.age,
                    email: selectedUser.email,
                    createdDate: selectedUser.createdDate
                }
                res.status(200).send(data);
            } catch (error) {
                res.status(400).send(error);
            }
    }

}