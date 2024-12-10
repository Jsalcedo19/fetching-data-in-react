const API_KEY = 'e347a7c79e1942c2ae1155603240912'
const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}`

const show = async (city) => {
    try {
      const apiResponse = await fetch(BASE_URL + `&q=${city}`)
      const weatherData = await apiResponse.json()
      return weatherData
    } catch (error) {
      console.error(error)
    }
  }
  
  const forecast = async (city) => {
    
  }
  
  export { show }