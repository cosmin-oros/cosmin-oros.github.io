import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("")

  const handleClickOnLink = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`$styles.paddingX w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/' className='flex items-center gap-2' onClick={handleClickOnLink}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' style={{width: '5%', height: '5%'}}/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Oros Cosmin-Cristian <span className='sm:block hidden'>| Software Engineer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li>
              <a href={`${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar