import Link from 'next/link';
import React from 'react'


const MenuItem = ({mn}) => {
  return (
    <Link className='menu-item' href={mn.url}>
      {mn.name}
    </Link>
  )
}

export default MenuItem