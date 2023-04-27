
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const index = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/" >Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li> <Link href="/contact">Contact</Link></li>
        <li>  <Link href="/blog"> blog</Link></li>
        <li> <Link href="/product">Product</Link></li>
      </ul>
    </nav>
  )
}

export default index
