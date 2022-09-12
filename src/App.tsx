import { useState, useEffect } from "react"
import axios from "axios"
import DataType from "./interfaces/dataType"
import HomePage from "./pages/homePage"
import './App.css'
import { getByLocation } from "./functions/functions"

function App() {

  const [data, setData] = useState<DataType | {}>({})
  const [loading, setLoading] = useState(false)
  const [finalUrl, setFinalUrl] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?`
  const appId = `&appid=be8e153187f6ace6b97f288ae84218da`

  const shouldRenderValues = (data as DataType).main

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const newFinalUrl = url + `q=` + event.target.value + appId
      setFinalUrl(newFinalUrl)
      console.log('Enter was pressed', newFinalUrl, event.target.value);
    }
  }
  
  // const getByLocation = async () => {
  //   setLoading(true)
  
  //   try {
  //     await axios.get(finalUrl).then((response) => {
  //       setData(response.data)
  //       console.log('Resposta', response.data)
  //     })
  //   } catch (e) {
  //     console.log(e)
  //   }
  
  //   setLoading(false)
  // }

  function getCoordinates() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      
      const coordinates = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`
      const newFinalUrl = url + coordinates + appId
      
      setFinalUrl(newFinalUrl)
    })
  }

  useEffect(() => {
    console.log('Final url updated', finalUrl)
    getByLocation(setLoading, finalUrl, setFinalUrl)
  }, [finalUrl])
  // useEffect(() => {
  //   getByLocation()
  // }, [finalUrl])

  return (
    <HomePage
      loading={loading}
      data={data}
      shouldRenderValues={shouldRenderValues}
      handleKeyPress={handleKeyPress}
      getCoordinates={getCoordinates}
    />
  )
}

export default App
