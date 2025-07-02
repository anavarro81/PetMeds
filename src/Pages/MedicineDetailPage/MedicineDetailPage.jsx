import React from 'react'
import { useParams } from 'react-router-dom'

const MedicineDetailPage = () => {
  
  const {id} = useParams();

  console.log(id);
    return (

    <div>MedicineDetailPage</div>


  )
}

export default MedicineDetailPage