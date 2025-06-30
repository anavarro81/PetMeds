import React from 'react'
import { FaSearch, FaCalculator, FaRegHeart, FaBriefcaseMedical,  FaPlusCircle} from "react-icons/fa";
import { useState, useRef } from 'react';



const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  
  
  const handleClick = () => {
    console.log("click");
    setIsOpen(!isOpen);
    
  };

  

  return (
    <> 
      <div className='md:hidden'>
      <header className="flex justify-between py-4 px-2 bg-[#5DADEC]  " >
        <div className='text-white text-2xl'>PETMEDS </div>
        <button onClick={handleClick} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 18 14"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 12.7387C18 13.242 17.4801 13.65 16.8387 13.65L1.16129 13.65C0.519928 13.65 -6.78526e-08 13.242 -4.37114e-08 12.7387C-1.95703e-08 12.2355 0.519928 11.8275 1.16129 11.8275L16.8387 11.8275C17.4801 11.8275 18 12.2355 18 12.7387Z"
              fill="#ffffff"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 7.27139C18 7.77465 17.5523 8.18262 17 8.18262L1 8.18262C0.447716 8.18262 -6.78525e-08 7.77465 -4.37114e-08 7.27139C-1.95703e-08 6.76814 0.447716 6.36017 1 6.36017L17 6.36017C17.5523 6.36017 18 6.76814 18 7.27139Z"
              fill="#ffffff"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 1.80404C18 2.3073 17.4801 2.71527 16.8387 2.71527L1.16129 2.71527C0.519928 2.71527 -6.78526e-08 2.3073 -4.37115e-08 1.80405C-1.95704e-08 1.30079 0.519928 0.892826 1.16129 0.892826L16.8387 0.892822C17.4801 0.892822 18 1.30079 18 1.80404Z"
              fill="#ffffff"
            />
          </svg>
        </button>      
      </header>
    </div>

    <header className="hidden md:flex justify-around py-4 px-2 bg-[#5DADEC]  " >
        <div className='text-white text-2xl'>PETMEDS </div>
        <nav> 
        <ul className="flex gap-6  text-white pointer">
            <li className='flex gap-2 items-center '>
              <a href="/buscador" className="flex gap-2 items-center">
                <FaSearch className='text-white'/> Buscador
              </a>
            </li>
            <li className='flex gap-2 items-center'>
              <a href="/calcular-dosis" className="flex gap-2 items-center">
                <FaCalculator className='text-white'/> Calcular Dosis
              </a>
            </li>
            <li className='flex gap-2 items-center'>
              <a href="/mis-favoritos" className="flex gap-2 items-center">
                <FaRegHeart className='text-white'/> Mis Favoritos
              </a>
            </li>
            <li className='flex gap-2 items-center'>
              <a href="/botiquin-virtual" className="flex gap-2 items-center">
                <FaBriefcaseMedical className='text-white'/> Mis botiquin virtual
              </a>
            </li>
            <li className='flex gap-2 items-center'>
              <a href="/alta-medicamento" className="flex gap-2 items-center">
                <FaPlusCircle className='text-white'/> Alta de medicamentos
              </a>
            </li>
        </ul>
        </nav>
    </header>

    {/* Menú móvil animado desde la derecha */}
    <div      
      className={`md:hidden min-h-screen absolute top-16 w-full bg-blue-500 p-4 transition-all duration-300 ease-out z-50 ${isOpen ? 'right-0' : '-right-full'}`}
      style={{ maxWidth: '400px' }}
    >
      <nav className="flex flex-col space-y-2">
        <a href="/buscador" className="text-white hover:text-blue-200" >Buscador</a>
        <a href="calcular-dosis" className="text-white hover:text-blue-200">Calcular Dosis</a>
        <a href="/mis-favoritos" className="text-white hover:text-blue-200">Mis Favoritos</a>
        <a href="/botiquin-virtual" className="text-white hover:text-blue-200">Mis botiquin virtual</a>
        <a href="/alta-medicamento" className="text-white hover:text-blue-200">Alta de medicamentos</a>
      </nav>
    </div>

    </>

    
  )
}

export default Header