import React from 'react'

const Header = () => {
  return (
     <>
     <header>
        <div className=" flex justify-between  gap-6 m-6  bg-green-100 p-4 rounded-lg ">
          <div>Ranjeet Tiwari</div>
          <div className=" hidden md:flex gap-6 2xl:hidden">
            <div>About us</div>
            <div>Contact us</div>
            <div>Resume</div>

            <div className='relative group'>
              <h1>More Section</h1>
              <div className='absolute hidden group-hover:flex flex-col bg-green-200 w-full mt-4 rounded-lg p-3'>
                <div className='items-center hover:bg-slate-300'>Ranjeet</div>
                <div className='items-center hover:bg-slate-300'>Ranjeet</div>
                <div className='items-center hover:bg-slate-300'>Ranjeet</div>
                <div className='items-center hover:bg-slate-300'>Ranjeet</div>
              </div>
            </div>
          </div>

          <div className="md:hidden relative group ">
            <div>Bar</div>
            <div className="absolute hidden right-0 group-hover:flex flex-col  bg-green-100 p-4 rounded-lg ">
              <div> * About us</div>
              <div> * Contact us</div>
              <div> * Resume</div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className=" grid grid-cols-3 gap-6 bg-green-100 h-[50%] w-full">
          <div className="bg-red-200 text-center">A</div>
          <div className="bg-red-200 text-center">B</div>
          <div className="grid row-start-2 col-start-1 col-end-3 bg-red-200 text-center">C</div>
          <div className="grid row-start-1 row-end-3 grid-cols-2 text-center">
            <div className="grid row-start-1 row-end-3 bg-red-200 text-center">D</div>
            <div>E</div>
            <div>F</div>
          </div>
        </div>
      </section>
     </>
  )
}

export default Header
