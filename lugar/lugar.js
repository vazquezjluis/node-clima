const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encoderURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encoderURL }`,
        headers: { 'X-RapidAPI-Key': '80b0e9eb0cmsh1f6a56a8e5c3ad4p14f958jsn9e24d1c49d03' }
    });

    const respuesta = await instance.get();
    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lt = data.lat;
    const lg = data.lon;

    return {
        direccion,
        lt,
        lg
    }
}


module.exports = {

    getLugarLatLng
}