import * as express from 'express';
import { Request, Response } from "express";
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

app.use(express.json());

app.get('/api/certifications', async  (req: Request, res: Response) => {
    await ReadFiles('./server/data/certificados/', AddFile, HandleErr);
    return res.status(200).send(fileList);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});