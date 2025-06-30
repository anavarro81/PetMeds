import React from 'react'
import {FaSearchPlus} from "react-icons/fa";


const MedicationCard = ({medication, showModal}) => {
  return (
    <>
    
    <div className='flex flex-col flex-start bg-white rounded-lg shadow-lg overflow-hidden py-4 px-4' > 
      <div className='relative'> 
        <img src={medication.photo} alt={`Medicamento ${medication.name}`} className='w-full object-contain h-[150px] '/>
        <FaSearchPlus 
          className='absolute top-0 right-0'
          onClick={() => showModal(true, medication.photo)}
          /> 
      </div>
      <h3 className='text-2xl'> {medication.name} </h3>      
      <p>  <b> Tipo: </b> {medication.type}  </p>
      <p> <b> Indicaciones: </b> {medication.usage} </p>      
      <div className='flex justify-start'>
        <button className='bg-[#5DADEC] text-white px-4 py-2 rounded-md mt-4'> Ver más </button>
      </div>
      </div>
    

    </>
  )
}

export default MedicationCard