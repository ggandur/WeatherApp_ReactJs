export const getByLocation = (setLoading, finalUrl, setData) => {
    setLoading(true)

    try {
        fetch(finalUrl).then((response) => {
            //setData(response.)
            console.log('Resposta', response.json())
        })
    } catch (e) {
        console.log(e)
    }

    setLoading(false)
}