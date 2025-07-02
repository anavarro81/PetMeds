import React, { useState, useEffect } from 'react'
import MedicationCard from '../../MedicationCard'
//  import { medications } from '../../../data/medications'
import ImageFull from '../../ImageFull'




const SearchPage = () => {

  const [modal, setModal] = useState({show: false, image: null})
   const [imageModal, setimageModal] = useState(null)

  
  const [filteredData, setfilteredData] = useState()

  // console.log ('medications ', medications)

  useEffect(() => {
    
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:3000/medicines')
        const data = await response.json()
        setfilteredData(data.medicines)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    getData()    
    
  }, [])

  const showModal = (show, image) => {
    setModal({show, image})
  }

  const searchData = (dataTerm) => {

    console.log(dataTerm)
    
    const filtered = medications.filter((medication) => {
      if (medication.name.toLowerCase().includes(dataTerm.toLowerCase())) {
        return medication
      }
    })
    
    setfilteredData(filtered)
    
  }

  const filterData = (data) => {
    const filtered = medications.filter((medication) => {
      if (medication.name.toLowerCase().includes(data.toLowerCase())) {
        return medication
      }
    })
  }



  return (
    <> 


    
    {modal.show
      ?  <ImageFull image={modal.image} setshowImageModal={(show) => setModal({ ...modal, show })} />
      :
    
    <div className='max-w-6xl mx-auto'>     

    <h2 className='text-2xl mb-6'> Buscador de Medicamentos </h2>
    <input 
      type="text" 
      placeholder='Buscar por nombre, tipo, medicamentos' 
      className='w-full border py-2 mb-6'
      onChange={(e) => searchData(e.target.value)}
      />
    
    <div id='filters' className='flex gap-5 mb-6'> 
    
    <label htmlFor="via"> Via </label>
    <select className='border px-4 py-2 '> 
      <option value="via"> Via </option>
      <option value="oral"> Oral </option>
      <option value="topica"> Tópica </option>
      <option value="subcutanea"> Subcútanea </option>
    </select>
    
    <select name="" className='border px-4 py-2'> 
      <option value="">Tipo</option>
      <option value="antibiotico">Antibiótico</option>
      <option value="antiinflamatorio">Antiinflamatorio</option>
      <option value="antiparasitario">Antiparasitario</option>
      <option value="analgesico">Analgésico</option>
      <option value="vacuna">Vacuna</option>
    </select>

    </div>

    <div id='result-container' className="grid gap-5 grid-cols-1 md:grid-cols-3">     

      
      
      {filteredData &&
        filteredData.map((medication) => (
          <MedicationCard 
            key={medication.id}
            medication={medication} 
            showModal={showModal} />
        ))
      }
      
      
    </div>
    
    

    
    </div>
    }
    </>
  )
}

export default SearchPage

//
