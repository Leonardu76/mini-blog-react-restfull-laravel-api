import React from 'react'
import './side.css'
import {useEffect} from 'react'
import  { useState } from 'react'
import { Link } from "react-router-dom"



const Side = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()

    const GetCategorias  = async () => {
    
      fetch("https://lavapi.000webhostapp.com/api/categorias")
      .then(response => {
          if (response.ok) {
              return response.json()
      }
          throw response;
      })
       .then(data => {
          setData(data)
       })
      .catch(error => {
          console.error("Error fetcj data: ", error)
          setError(error);
       } ) 
            
          
          
        }

   useEffect(() => {
    GetCategorias();
      },[])




    return (
        <div>
        <div className='card-side'>
        <div className='card-topo'>
                <h3 className='card-titulo'>CATEGORIAS</h3>
                </div>
        {Object.values(data).map(categoria => (

<>
<Link to={"/Posts/" + categoria.id} >


                <div className='card-body'> 
                <ul>
                    
                      <li>{categoria.categoria}</li>
                      <hr /> 
                      

                     
                      </ul>
                    </div>

                    <div className='card-bottom'>
                    
                    </div>
                    </Link>
                    </>

        ))}

        </div>
        </div>
   )
}



    


export default Side