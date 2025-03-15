import React, {useState, useEffect,useMemo,lazy,Suspense} from 'react'
import api from '../api/api'
import axios from 'axios'

const DeitImage = lazy(()=> import("../components/DietImages"))

function DietList() {
  const [diet,setDiet] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect( ()=>
    {
        const fetchProducts = async ()=>
        {
            setLoading(true)
            try
            {
                const response = await api.get("/diet")
                setDiet(response.data)
            }
            catch(err)
            {
                console.log("error while fetching data " + err)
            }
            finally
            {
                setLoading(false)
            }
        
        }
        fetchProducts()

    },[])

    const dietList  = useMemo(()=>
    {
        return diet.map((d) => (
            <li key={d.id}>
            <h3>{d.name} - {d.calories}</h3>
            <Suspense fallback = {<p>Loading image</p>}>
            {d.images?.map((img,index)=>(
                <DeitImage key={index}  src={img} alt={d.name}/>
            ))}
            
            </Suspense>
            
            </li>
        ))
    },[diet])


  return (
    <div>

     <h3>Diet List</h3>
     {loading ? <p>Loading</p> : <ul>{dietList}</ul>}

      
    </div>
  )
}

export default DietList
