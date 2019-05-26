const axios = require('axios');

const getClima = async(lat, lon) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=9aeaba31cfd80a1c6fc106ad8280e9ed&units=metric`);
    return respuesta.data.main.temp;
}


module.exports = {
    getClima
}