
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/router"

export const getStaticPaths=async()=>{
  const res=await fetch(`https://mockapi7.onrender.com/dogs`)
  const data=await res.json();

  const paths=data.map((curr)=>{
    return{
      params:{pageNo:curr.id.toString()}
    }
  })

  return{
   paths,
   fallback:false
 };
}

export const getStaticProps=async(context)=>{
  const id=context.params.pageNo
  const res=await fetch(`https://mockapi7.onrender.com/dogs/${id}`)
  const data=await res.json();

  return{
    props:{
      data,
    },
 };
 };


const Mydata = ({data}) => {
    const router=useRouter()
  return (

    <>
       <Navbar/>
       <h3>{data.id}</h3>
       <h2>{data.name}</h2>
       <p>{data.place}</p>
      <Link href="/blog"> <button>Go Back</button></Link>
        </>
  )
}

export default Mydata