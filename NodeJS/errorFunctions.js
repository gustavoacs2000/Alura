import chalk from 'chalk'

async function errorFunction(erro){
    throw new Error(chalk.red(erro));
}

export default errorFunction