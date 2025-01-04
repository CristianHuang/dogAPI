import {useState, useEffect} from 'react'
import './breeds.css'
import BreedsImage from './breedsImage'

function Breeds(){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

     useEffect(() => {
        const fetchData = async () => {
         try {
            setLoading(true)
            const response = await fetch('https://dog.ceo/api/breeds/list')
            if(!response.ok){
              throw new Error('Error al obtener la lista de razas')
            }
            const json = await response.json()
            setData(json)
        
         }
        catch (error) {
         setError(error)
         }
        finally {
            setLoading(false)
        
         }
        }
        fetchData()
     }, [])
    return (
        <>
         <ul>
           {data && data.message.map((raza, id) => (
             <li key={id}>{raza}
             <BreedsImage
                breed={raza}
             />
             </li>
           ))}
          </ul>
     </>
     )
}

export default Breeds