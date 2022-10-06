import axios, { AxiosResponse } from "axios"

type SetLoadingType = (stateLoading: boolean) => void

export const getByLocationPromised = (setLoading: SetLoadingType, finalUrl, setData) => {
    setLoading(true)

    const promiseResult = axios.get(finalUrl)

    const responseCallback = (response: AxiosResponse) => {
        setData(response.data)
        console.log('Resposta', response.headers)
    }
    const errorCallback = (err) => { console.log(err) }
    const onFinally = () => setLoading(false)

    promiseResult
        .then(responseCallback)
        .catch(errorCallback)
        .finally(onFinally)

}

export const getByLocationAsync = async (setLoading, finalUrl, setData) => {
    setLoading(true)

    try {
        const result = await axios.get(finalUrl);
        setData(result.data)
        console.log('Resposta', result.data)
    } catch (e) {
        console.log(e)
    }

    setLoading(false)
}

// --------------------------------------------------


export const getByLocationPromisedFetch = (setLoading: SetLoadingType, finalUrl, setData) => {
    setLoading(true)

    const promiseResult = fetch(finalUrl)

    const responseCallback = (response: Response) => {
        const jsonResult = response.json()

        jsonResult.then(setData)
        jsonResult.catch()
    }
    const errorCallback = (err) => { console.log(err) }

    promiseResult.then(responseCallback)
    promiseResult.catch(errorCallback)

    setLoading(false)
}


export const getByLocationAsyncFetch = async (setLoading, finalUrl, setData) => {
    setLoading(true)

    try {
        const result = await fetch(finalUrl);
        const jsonResult = await result.json()

        setData(jsonResult)
        console.log('Resposta', result.headers)
    } catch (e) {
        console.log(e)
    }

    setLoading(false)
}