import Navbar from '@/components/Navbar'
import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const addData = () => {
    const[name,setName]=useState("")
const[age,setAge]=useState("")
const[gender,setGender]=useState("")
const[place,setPlace]=useState("")

const handleSubmit=()=>{
    if(name&&age&&gender&&place){
        const payload={
            name,
            age,
            gender,
            place
        }
        axios.post(`https://mockapi7.onrender.com/dogs`,payload)
        .then((res)=>{
           console.log(res)
           alert("added")
          })
   
}
}

  return (
    <div>
    <Navbar />  

<div className='form'>
    <h3>Add Data</h3>
   
    <div>
        <br />
        <input w="90%" margin="auto" placeholder="Name of breeds" value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div>
        <br />
        <input w="90%" margin="auto" placeholder="Age of pet" value={age} onChange={(e)=>setAge(e.target.value)} />
      </div>
      <div>
        <br />
        <input w="90%" margin="auto"  placeholder="Enter Gender" value={gender} onChange={(e)=>setGender(e.target.value)} />
      </div>
      <div>
        <br />
        <input  w="90%" margin="auto"  placeholder="Enter Place" value={place} onChange={(e)=>setPlace(e.target.value)} />
      </div>
      <Button className="mt-3"  onClick={handleSubmit}>
       Submit
      </Button>
   
  </div>

      </div>
  )
}

export default addData
