import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT= 3000;

//conection mongoose
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://node:${process.env.password}@nodelinkedin.xnmeh.mongodb.net/crmDb?retryWrites=true&w=majority`,{
  useNewUrlParser: true
})

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.use(express.static('public'));


app.get('/',(req,res)=>{
  res.send(`Serveur node and express sur port ${PORT}`)
});

app.listen(PORT, ()=> console.log(`Server is runing on port ${PORT}`));