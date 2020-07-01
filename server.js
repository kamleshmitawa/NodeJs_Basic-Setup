import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(bodyParser());
app.use(cors());

/////////// this is simple GET request ////////////////////
app.get('/', (req, res) => {
    let response = {};
    response.status = 200;
    response.message = "success";
    response.data = [];

    res.send(response)
})

/////////////this is GET request with query params ///////////
app.get('/:name', (req, res) => {
    const { name } = req.params;
    let namesList=  [];
    let response = {};
    namesList.push(name);

    response.status = 200;
    response.message = "success";
    response.data= namesList;

    res.send(response)
})

/////////////////// this is POST request///////////////////////
// You have to send "name" in a requested body of this POST request.
app.post('/test', (req, res) => {
    const { name } = req.body;

    let response = {};
    response.status = 200;
    response.message = "success";
    response.data = [{ 'name' : name }];

    res.send(response)
})


app.listen((process.env.PORT), () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})