//importa las librerias y archivos
const argv = require('./config/yargs').argv;
var colors = require('colors');
const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
let comando = argv._[0];
//comandos listar, crear y mensaje de error en la consola y colores del calculo
switch(comando){
  case 'listar':
     listarTabla(argv.base, argv.limite);

  break;

  case 'crear':
     crearArchivo(argv.base, argv.limite)
    .then(archivo=>console.log(`Archivo creado: ${archivo.cyan}`))
    .catch(e => console.log(e));

  break;

  default:
     console.log('Comando no reconocido')

}
//let base = 5;

//console.log(process.argv);
//let argv2 = process.argv;
//let parametro = argv[2];
//let base=parametro.split('=')[1]

//console.log(argv.base);


