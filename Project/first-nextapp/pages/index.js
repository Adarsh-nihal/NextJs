
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Head from 'next/head'
import Button from 'react-bootstrap/Button';
const index = () => {
  return (
   <div >
    <Head>
      <title>Home Page</title> 
      </Head>
   {/* <Navbar /> */}
<div >
   {/* <h2>I am main page</h2> */}

   <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

   </div>
   </div>
  )
}

export default index
