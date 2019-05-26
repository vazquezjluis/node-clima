const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtene el clima',
        demand: true
    }

}).argv;


const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lt, coords.lg);
        return `El clima de ${direccion} es de º${temp} `;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion} `;
    }


    //Salida 
    // El clima de XXX es de XX
    // No se pudo determinar el clima de XXX

}




getInfo(argv.direccion).then((result) => {
    console.log(result);

}).catch((err) => {

});;