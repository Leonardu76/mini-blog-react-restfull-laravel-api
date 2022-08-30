// import  { useState } from 'react'
// const [data, setData] = useState([])



export const GetUsuarios  = async () => {
    // const [data, setData] = useState


    fetch("https://bloggphp.herokuapp.com")
    .then((response) => response.json())
    .then((responseJson) => (
        console.log(responseJson)
        // setData(responseJson.records)
        ));
    }
    
    
    
 