import React from 'react'
import Navbar from '../navbar/navbar'
import './register.css'
import { FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';


const Register = () => {
  const url = 'register'

  return (


    <div className='registerBackground'>
<Navbar url={url}/>

<div className='register-div'>

<form className='form-register'>  
<h1 className='RegisterTitle'>Registrar-se</h1>

<label><b>Nome</b></label> 
<input className='inputForm' type="text" placeholder='Digite seu nome' />

<label><b>Email</b></label> 
<input className='inputForm' type="email" placeholder='Digite seu email' />

<label><b>Senha</b></label> 
<input className='inputForm' type="password" placeholder='Digite sua senha' />

<button className='btnRegister' type='submit'>Registrar</button>
<p className='text'>Registrar com redes sociais</p>

<div className='redesRegister'>
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

export default Register