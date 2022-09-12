import axios from "axios"

export const getByLocation = async (setLoading, finalUrl, setData) => {
    setLoading(true)

    try {
        await axios.get(finalUrl).then((response) => {
            setData(response.data)
            console.log('Resposta', response.data)
        })
    } catch (e) {
        console.log(e)
    }

    setLoading(false)
}