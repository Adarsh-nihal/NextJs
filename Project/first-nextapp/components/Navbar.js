import Link from "next/link"

const Navbar = () => {
  return (
    <div className="bgImage" >
     <nav >
      <ul className='menu-bar'>
        <li><Link href="/" >Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li> <Link href="/contact">Contact</Link></li>
        <li>  <Link href="/blog"> blog</Link></li>
        <li> <Link href="/product">Product</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar