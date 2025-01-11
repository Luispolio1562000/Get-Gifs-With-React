import axios from "axios";
import { useEffect, useState } from "react"
import { API_KEY, API_URL } from '../helpers/getGifs';




export const useFetchGifs = (category) => {


    const [gifts, setGifts] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    //* Sirve para disparar efectos secundarios, cuando algo cambie como por ejemplo el usestate.
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${API_URL}?api_key=${API_KEY}&q=${category}&limit=10`)
            .then(response => {
                // console.log(response);
                const responseData = response.data.data
                const giftsResponse = responseData.map(gift => ({
                    id: gift.id,
                    title: gift.title,
                    url: gift.images.downsized_medium.url
                }))
                setGifts(giftsResponse)
                setIsLoading(false)

            }).catch(err => {
                //console.log(err);

            })

    }, [category])


    return (
        {
            gifts,
            isLoading
        }
    )
}

