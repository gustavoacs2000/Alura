import chalk from 'chalk';
import * as fs from 'fs';
import errorFunction from './errorFunctions.js' 

async function pegarArquivo(filePath){

    const enconding = 'utf-8'

    fs.readFile(filePath, enconding, async(err, fileData) => {
        if(err){
            errorFunction(err);
        };
        console.log(chalk.green(fileData))
    });
}

pegarArquivo('./arquivos/texto1.md')