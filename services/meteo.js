import axios from 'axios'


const GetMeteoJour = async (status) => {
    try {

        var config = "9d6d603f714c9c5089e09f311545ff7d"

        var url = 'https://api.openweathermap.org/data/2.5/weather?units='+status+'&lat=44.34&lon=10.99&appid='+config

        
        const response = await axios({
            method: 'get',
            url: url
        })
        
        return response

    } catch (e) {
        console.log('error',e)
        return ['axios_error']
    }
}

export default GetMeteoJour 