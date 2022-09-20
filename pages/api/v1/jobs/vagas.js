import userModel from "../../../../src/models/User";

export default async function listarVagas(req, res){
    const {method} = req;

    switch(method){
        case 'GET': 
            try {
                const listJobs = await userModel.find();
                res.status(200).send(listJobs);
            } catch (error) {
                res.status(400).send(error);
            }
    }

}