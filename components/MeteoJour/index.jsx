
import { useEffect, useState } from 'react'
import { Button, Text } from 'react-native-paper'
import GetMeteoJour from '../../services/meteo'

const MeteoJour = () => {

    const [meteo, setMeteo] = useState(null)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        const data = async () => {
            const response = await GetMeteoJour()
            setMeteo(response.data)
        }
        data()
    }, [])

    const Change = async() => {
        setStatus(!status)
        const response = await GetMeteoJour(status ? "metric" : "imperial")
        setMeteo(response.data)
    }

    return <>
        <Button mode="contained" onPress={Change}>
            Change Metric
        </Button>
        <Text>{meteo?.main?.temp}</Text>
    </> 
}

export default MeteoJour