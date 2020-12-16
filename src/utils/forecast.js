const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=58e7e50187d08ae8482ec04d713473ae&query='+ latitude +',' + longitude

    request({url, json: true}, (error, {body} = {}) => {
        if(error) {
            callback('Unable to connect to weather services.', undefined)
        } else if(body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ '. It is currently ' + body.current.temperature + ' degrees outside. It feels like ' + body.current.feelslike + ' degrees though.')
        }
    })
}

module.exports = forecast