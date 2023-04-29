
const argv = require('yargs')
                 .option('b', {
                    alias: 'base',
                    demandOption: true,
                    type: 'number',
                    describe: 'Es la base de la tabla de multiplicar'
                 })
                 .option('l', {
                    alias: 'listar',
                    demandOption: false,
                    type: 'boolean',
                    describe: 'Listar las tablas de multiplicar',
                    default: false
                 })
                 .option('h',{
                    alias: 'hasta',
                    demandOption: false,
                    type: 'number',
                    describe: 'Limite de las tablas de multiplicar',
                    default: 10
                 })
                 .check((argv, options) => {
                    console.log('yargs', argv);
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                 })
                 .argv;

module.exports = argv;
