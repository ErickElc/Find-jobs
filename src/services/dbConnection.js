import mongoose from "mongoose";

const connection = {};
function dbConnection(){
	if(connection.isConnected){
		return;
	}
	mongoose.connect('mongodb+srv://admin:admin@jobs-info.oh05jwh.mongodb.net/users?retryWrites=true&w=majority',{
		useUnifiedTopology: true,
		useNewUrlParser: true,
	}).then(()=> {console.log('Banco de dados Conectado!')}).catch(err => {console.log(err)});
}

export default dbConnection;