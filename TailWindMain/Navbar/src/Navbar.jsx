import React from 'react'

const Navbar = () => {
  return (
    <>
     <header>
        <div className='flex flex-col justify-center items-center relative group'>
            <div className='group-hover:hidden'>Bar</div>
            <div className='absolute hidden group-hover:flex mt-70 ml-30 flex-col' >
                <div className='bg-red-100 p-3 rounded-3xl'>A</div>
                <div className='bg-red-100 p-3 rounded-3xl'>B</div>
                <div className='bg-red-100 p-3 rounded-3xl'>C</div>
                <div className='bg-red-100 p-3 rounded-3xl'>D</div>
                <div className='bg-red-100 p-3 rounded-3xl'>E</div>
            </div>
        </div>
     </header>
    </>
  )
}

export default Navbar
