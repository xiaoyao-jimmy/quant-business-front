import axios from "axios";

// axios.defaults.baseURL = 'http://139.224.3.150:8080'
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc1NjkxNjI2OCwianRpIjoiNzc3MWQwN2ItYzE0Ni00NzkzLWJhZTYtYmYxMTJmMDdhYmE3IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InJvb3QiLCJuYmYiOjE3NTY5MTYyNjgsImNzcmYiOiI0MzA2ZmU2NS0zY2E0LTQ4MDItYTdjZi1lNzM3ZTk3N2Y0ODcifQ.rGjuExRRibJUiYeyXbLO1scwa97kF8ZtkmniiuwD0-Q'

async function getCandleStickSign(date) {

    const response = await axios.get(`/candlestick/get_candlestick_sign?date=${date}`)
    return response.data
}

export { getCandleStickSign }

