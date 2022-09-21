import jwt from 'jsonwebtoken';

export default async function AuthController(req, res){
    const { method } = req;
    const token = req.body.token;
    if(!token) return res.status(403).send("Access denied");
    switch(method){
        case 'POST':
            try {
                const userVerifed = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
                if(!userVerifed) return res.status(403).send("Access Denied");
                res.status(202).send('User autorizado!');
            } catch (error) {
                res.status(403).send('Access denied');
            }
    };
}
