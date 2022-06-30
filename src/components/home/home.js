import React from 'react'
import Navbar from '../navbar/navbar'
import './home.css'
import { FaCalendarAlt } from 'react-icons/fa';

const home = () => {
    const url = 'home'

    return (
        <div>
            <Navbar  url={url}/>

            <div className='PostDiv'>
               <h1 className='title'>Mini blog</h1>
                <div className='posts'>
                    <div className='cardTop'>
                        <b>Lorem ipsum teem, a labore obcaecati.</b> <hr />
                        <b>De: Loren</b>

                    </div>
                    <div className='cardBody'> 
  
                     <img className='imgPost' src="https://static.preparaenem.com/conteudo_legenda/74c55d5920dc9c812f81a3a4c7b4a966.jpg" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
                            quidem cumque nesciunt dolorum illum autem numquam minus natus. Vel.</p>
                      
                        <button className='btnOpen'>Ler</button>
                        <hr />
                        </div>

                    <div className='cardBottom'>   
                    <p><FaCalendarAlt/><b>20/04/2021 </b></p></div>
                </div>

     <div className='posts'>
                    <div className='cardTop'>
                        <b>Lorem ipsum teem, a labore obcaecati.</b> <hr />
                        <b>De: Loren</b>

                    </div>
                    <div className='cardBody'> 
  
                     <img className='imgPost' src="https://static.preparaenem.com/conteudo_legenda/74c55d5920dc9c812f81a3a4c7b4a966.jpg" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
                            quidem cumque nesciunt dolorum illum autem numquam minus natus. Vel.</p>
                      
                        <button className='btnOpen'>Ler</button>
                        <hr />
                        </div>

                    <div className='cardBottom'>   
                    <p><FaCalendarAlt/><b>20/04/2021 </b></p></div>
                </div>


                <div className='posts'>
                    <div className='cardTop'>
                        <b>Lorem ipsum teem, a labore obcaecati.</b> <hr />
                        <b>De: Loren</b>

                    </div>
                    <div className='cardBody'> 
  
                     <img className='imgPost' src="https://static.preparaenem.com/conteudo_legenda/74c55d5920dc9c812f81a3a4c7b4a966.jpg" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
                            quidem cumque nesciunt dolorum illum autem numquam minus natus. Vel.</p>
                      
                        <button className='btnOpen'>Ler</button>
                        <hr />
                        </div>

                    <div className='cardBottom'>   
                    <p><FaCalendarAlt/><b>20/04/2021 </b></p></div>
                </div>





            </div>
        </div>

    )
}

export default home