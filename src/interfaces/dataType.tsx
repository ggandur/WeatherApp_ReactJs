import WeatherType from "./weatherType"

interface DataType {
    main: {
      temp: number
      feels_like: number
      humidity: number
    }
    name: string
    weather: Array<WeatherType>
    wind: {
      speed: number
    }
}

export default DataType