// import  { useState } from 'react'
// const [data, setData] = useState([])



export const GetUsuarios  = async () => {
    // const [data, setData] = useState


    fetch("http://localhost/api/index.php")
    .then((response) => response.json())
    .then((responseJson) => (
        console.log(responseJson)
        // setData(responseJson.records)
        ));
    }
    
    
    
 