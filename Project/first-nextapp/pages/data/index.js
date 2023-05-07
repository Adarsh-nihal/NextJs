import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import axios from 'axios';

//  export const getStaticProps=async()=>{
//   const res=await fetch(`https://mockapi7.onrender.com/dogs`)
//   const data=await res.json();


//   return{
//     props:{
//       data,
//     },
//  };
//  };

const index = () => {
const [data,setData]=useState([])
  const handleDelete=(id)=>{
    axios.delete(`https://mockapi7.onrender.com/dogs/${id}`)
    .then((data)=>{console.log(data)})
    .catch((e)=>console.log(e))
  }
  
  useEffect(() => {
axios.get(`https://mockapi7.onrender.com/dogs`).
then((data)=>{console.log(data)
setData(data.data)})
.catch((Er)=>console.log(Er))

  },[handleDelete])
  
  return (
    <div>
      <Navbar />
      <div  className='grid'>
      {data.length>0&&data.map((ele)=>{
    return<div key={ele.id}> 
     <Link href={`/data/${ele.id}`} ><img width="50%" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" />    </Link>
      <h2>{ele.name}</h2>
      <h4>{ele.age} yrs</h4>
      <h4>{ele.place}</h4>
      <h4>{ele.gender}</h4>
      <Button onClick={()=>handleDelete(ele.id)}>Delete</Button>
    </div>

   })}
   </div>
    </div>
  )
}

export default index