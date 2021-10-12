import {useEffect, useState} from "react";

export default function (request) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            request()
                .then(respone => setData(respone.data))
                .catch(error => setError(error))
                .finally(() => setLoading(false))
        }, 1000 )
    },[])

    return [data, loading, error]
}