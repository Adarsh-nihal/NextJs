import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div>
<h2>We are sorry this page is not found</h2>
<Link href="/">go back to home</Link>
    </div>
  )
}

export default error