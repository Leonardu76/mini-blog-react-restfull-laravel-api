import React from 'react'
import './side.css'
import {useEffect} from 'react'
import  { useState } from 'react'
import { Link } from "react-router-dom"



const Side = () => {
    const [data, setData] = useState([])

    const GetCategorias  = async () => {
    
        fetch("http://localhost/api/showCategorias.php")
        .then((response) => response.json())
        .then((responseJson) => (
            setData(responseJson.categoria)
            ));
            
          
          
        }

   useEffect(() => {
    GetCategorias();
      },[])




    return (
        <div>
{console.log(data)}
        <div className='card-side'>
        <div className='card-topo'>
                <h3 className='card-titulo'>CATEGORIAS</h3>
                </div>
        {Object.values(data).map(categoria => (

<>
<Link to={"/Posts/" + categoria.id_categoria} >


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