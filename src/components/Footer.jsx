import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <p>Official pet shelter site of AnyCompany Petshelter</p>
        <p>© {new Date().getFullYear()} AnyCompany Petshelter. All rights reserved.</p>
    </div>
  )
}

export default Footer