import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    // const [data, setData] = useState(0);
    // useEffect(()=>{
    //     const url = 'https://api.github.com/users/Biki721';
    //     fetch(url)
    //    .then(response => response.json())
    //    .then(data => setData(data))
    // },[])
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.id} 
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Biki721')
    return response.json()
}