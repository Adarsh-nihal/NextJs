import Link from 'next/link'
import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
const error = () => {
const router=useRouter()

useEffect(()=>{
setTimeout(()=>{
router.push("/")
},3000)

},[])
  return (
    <div>
      <Navbar/>
<h2>We are sorry this page is not found</h2>
<Link href="/">go back to home</Link>
<h2 onClick={()=>router.push("/")} >go by btn back to home</h2>

    </div>
  )
}

export default error