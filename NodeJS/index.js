import chalk from 'chalk';
import * as fs from 'fs';
import errorFunction from './errorFunctions.js' 

async function pegaArquivo(filePath) {
    const enconding = 'utf-8';

    try {
        const texto = await fs.promises.readFile(filePath, enconding);
        console.log(chalk.green(texto))
    } catch(err){
        errorFunction(err);
    }
}


// function pegaArquivo(filePath) {
//     const enconding = 'utf-8';
//     fs.promises.readFile(filePath)
//     .then((fileData) => {
//         console.log(chalk.green(fileData));
//     }).catch((err) => {
//         errorFunction(err);
//     })
// }

// async function pegaArquivo(filePath){

//     const enconding = 'utf-8'

//     fs.readFile(filePath, enconding, async(err, fileData) => {
//         if(err){
//             errorFunction(err);
//         };
//         console.log(chalk.green(fileData));
//     });
// }

pegaArquivo('./arquivos/texto1.md');