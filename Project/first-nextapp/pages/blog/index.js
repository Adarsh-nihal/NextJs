import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar';
import Link from 'next/link';

 export const getStaticProps=async()=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data=await res.json();

  return{
    props:{
      data,
    },
 };
 };


const index = ({data}) => {
  return (
    <div>
      <Navbar />
      {data.slice(0,5).map((ele)=>{
    return <div key={ele.id}> 
      <h3>{ele.id}</h3>
      <Link href={`/blog/${ele.id}`} ><h3>{ele.title}</h3></Link>
    </div>
   })}
    </div>
  )
}

export default index