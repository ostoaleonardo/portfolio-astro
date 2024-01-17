const API_KEY = import.meta.env.OPEN_WEATHER_API_KEY
const ENDPOINT = "https://api.openweathermap.org/data/2.5/weather"
const ICON_URL = "https://openweathermap.org/img/wn/"

export const getWeather = async (lat: string, lon: string, lang: string = "es") => {
    const params = new URLSearchParams({
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
        lang
    })

    const url = `${ENDPOINT}?${params}`

    const weather = await fetch(url)
        .then(res => res.json())
        .then(formatWeather)
        .catch(() => { return { temp: "", description: "", icon: "" } })

    return weather
}

const formatWeather = (weather: any) => {
    const { description, icon } = weather.weather[0]
    const { temp } = weather.main

    return {
        description,
        icon: ICON_URL + icon + "@2x.png",
        temp
    }
}
