
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Head from 'next/head'

const index = () => {
  return (
   <div >
    <Head>
      <title>Home Page</title> 
      </Head>
   <Navbar />

   <h2>I am main page</h2>
   </div>
  )
}

export default index
