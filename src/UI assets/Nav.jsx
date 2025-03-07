//Imported Assets 
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
// Tip: Always use sematic tags 
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img
            src={headerLogo}
            alt='Logo'
            width={130}
            height={29}
            />                
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item)=>(
                <li key={item.label}>
                    <a 
                    href={item.href}
                    className='fonts-montserrat leading-normal text-lg text-slate-gray'
                    >
                        {item.label}
                    </a>
                </li>
            ))}
            </ul>
            <div className='lg:hidden'>
                <img
                    src={hamburger}
                    alt='hamburger'
                    width={25}
                    height={25}
                    // onClick={showNav()} MAKE THE HAMBURGER WORK ON MOBILE DEVICES!!
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav