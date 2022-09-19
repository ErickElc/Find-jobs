import userModel from "../../../../src/models/User";

export default async function AuthAdmin(req, res){
    const { method } = req;
    switch(method){
        case 'POST':
            try {
                const user = await userModel.findOne({email: req.body.email})
                if(user.admin === true){
                    return res.status(201).send('admin autorizado!')
                }
            } catch (error) {
                res.status(403).send('Access denied')  
            }
    }
}