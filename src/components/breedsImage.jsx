import { useState, useEffect } from "react";

function BreedsImage({breed}){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
                if(!response.ok){
                    throw new Error('Error en obtener la imagen')
                }
                const json = await response.json()
                setData(json)
            }
            catch (error){
                setError(error)
            }
            finally{
                setLoading(false)
            }
        }

    useEffect(() => {
        fetchData()
    }, [])
    return(
        <>
            {data && <img src={data.message} alt={breed}/>}
            <button onClick={fetchData}>Random Image</button>
        </>
    )
}

export default BreedsImage;