import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './PostsByCategoria.css'
import { FaCalendarAlt } from 'react-icons/fa';
import {useEffect} from 'react'
import  { useState } from 'react'
// import { useParams } from "react-router-dom"



const PostsByCategoria = () => {
    const [data, setData] = useState([])
    // const [nome, setNome] = useState()
    // const { id } = useParams()


    // const GetId  = async e =>{

    //     e.preventDefault()
    
    //    let reqs =  await fetch("https://bloggphp.herokuapp.com/showPosts.php", {
    //       method: 'POST',
    //       headers: {
    //     'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({id})
    //     })
    //     const ret = await reqs.json();
    //     console.log(ret)

    // }

    const GetPosts  = async () => {
    
    
        fetch("https://bloggphp.herokuapp.com/showPosts.php")
        .then((response) => response.json())
        .then((responseJson) => (
            setData(responseJson.posts)
            ));
            
          
          
        }

   useEffect(() => {
    GetPosts();
      },[])

    const url = 'home'


    return (
        <div>
            <Navbar  url={url}/>

                    {Object.values(data).map(post => (
                

//    <div className='Post'>
        <>
            <h1 className='title'>{post.titulo}</h1>
    <div className='posts'>
        <div className='cardTop'>
            <b className='card-top-titulo'>{post.titulo}</b> <hr />
            <b className='card-top-titulo'>De: {post.autor}</b>
            </div>

        <div className='cardBody'> 

         <img className='imgPost' src={post.img_post} alt="" />
            <p className='contentPost'>{post.conteudo}.</p>
          
            <button className='btnOpen'>Ler</button>
            <hr />
            </div>
            <div className='cardBottom'>   
                    <p className='card-bottom-calendar'><FaCalendarAlt/><b>{post.created_at} </b></p></div>
             </div>
             </>
   
))}


        </div>
      

    )
}

export default PostsByCategoria