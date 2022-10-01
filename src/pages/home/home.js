import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Side from '../../components/side/side'

import './home.css'
import { FaCalendarAlt } from 'react-icons/fa';
import {useEffect} from 'react'
import  { useState } from 'react'


const home = () => {
    const [data, setData] = useState([])

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
            <h1 className='title'>Mini blog</h1>

        <div className='post-div'>
              <div className='sider'>
        <Side/>

        </div>
            {Object.values(data).map(post => (

//    <div className='Post'>
        
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

   
))}


        </div>
      
        </div>

    )
}

export default home