import userModel from "../../../../src/models/User";

export default async function usersListAll(req, res){
    const { method } = req;
    switch(method){
        case 'GET': 
            try {
                const list = await userModel.find();
                res.status(200).send(list)
            } catch (error) {
                console.log(error)
                res.status(500).send(error);
            }
    }
}