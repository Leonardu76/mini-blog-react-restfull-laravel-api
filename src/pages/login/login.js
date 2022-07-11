import React from 'react'
import './login.css'
import Navbar from '../../components/navbar/navbar'

import { FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';

const login = () => {
  const url = 'login'
  return (
    <div className='loginBackground'>
          <Navbar url={url}/>

    <div className='Login-div'>

     <form className='form-login'>  
     <h1 className='Logintitle'>Login</h1>
 
    <label><b>Email</b></label> 
    <input className='inputForm' type="email"  />

    <label><b>Senha</b></label> 
    <input className='inputForm' type="password"  />

    <button className='btnLogin' type='submit'>Login</button>
    <p className='text'>Login com redes sociais</p>

  <div className='redesLogin'>
  <FaFacebook />
  <FaLinkedin />
  <FaGoogle/>
    </div>
    <p className='forget'>Esqueceu a senha?</p>

    </form>
    {/* <div className='img'>
        <img className='imgLogin' src={Login} alt="" />
    </div> */}
    </div>



    </div>
  )
}

export default login
