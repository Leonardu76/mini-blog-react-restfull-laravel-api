import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';



const Navbar = (props) => {

  const { url } = props



  return (
    <div className={url === 'register' ? ('navbarRegister') :
      url === 'login' ? ('navbarLogin') :
        url === 'home' ? ('navbarHome') : null
    }>

      <Link to='/'> <img className='logo' src="https://play-lh.googleusercontent.com/cWG9-bk2_zLdKsN9vsYEdbCReVfzgXU6FeHUmLI8a24FoZ05TpOLYXInCQ278FTwCw" alt="" />
      </Link>

      <div className='navBtn'>
        {url === 'register' ?
          <div>
            <Link to='/'>  <button className='registerBtn'> News</button></Link>
            <Link to='/login'> <button className='LoginBtn'><b>Login</b></button> </Link>
          </div> 

          :

          url === 'login' ?
            <div>
              <Link to='/'>  <button className='registerBtn'>News</button></Link>
              <Link to='/register'> <button className='registerBtn'><b>Registrar-se</b></button></Link>
            </div>
          :

            url === 'home' ?
              <div>
                <Link to='/login'> <button className='NewsBtn'><b>Login</b></button> </Link>
                <Link to='/register'> <button className='NewsBtn'><b>Registrar-se</b></button></Link>
                <div className='search'>
                  <input className='srch' type="text" placeholder='Pesquise aqui' />
                  <button className='btnSrch'><FaSearch /></button>
                </div>

              </div>
            : 
            null


        }



      </div>




    </div>
  )
}

export default Navbar
