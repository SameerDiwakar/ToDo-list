import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-purple-700 text-white py-2'>
        <div className="logo">
          <span className='font-bold text-xl mx-8'>Todo</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>Tasks</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
