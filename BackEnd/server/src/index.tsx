import * as express from 'express';
import { Request, Response } from "express";
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const fs = require("fs");



var fileList =  new Array();

function AddFile(file: string, data: [string]){
    data.push(file);
}

function HandleErr(error: Error) {
    console.log('Não foi possível carregar os arquivos: ' + error.message);    
}
async function ReadFiles(path: string, onFileContent: Function, onError: Function) {
    const files = await fs.readdir(path, function (err: Error, filenames: Array<string>){
        if(err){
            console.log('Não foi possível carregar os arquivos: ' + err.message);
            return;
        }

        filenames.forEach(function (filename: string) {
            fs.readFile(path + filename, 'utf-8', function(err: Error, content: string) {
                if (err) {
                    onError(err);
                    return;
                }

                onFileContent(path + filename, fileList);
            });
        });
    });
}

const port = process.env.PORT || 5000;

const app = express();

mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true
    }
);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);
app.use(require("./routes"));

app.get('/api/certifications', async  (req: Request, res: Response) => {
    await ReadFiles('./server/data/certificados/', AddFile, HandleErr);
    return res.status(200).send(fileList);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});