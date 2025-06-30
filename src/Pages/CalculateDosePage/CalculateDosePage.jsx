import React from 'react'
import { useState } from 'react';

const CalculateDosePage = () => {

  const [form, setForm] = useState({
    medicineName: '',
    form: 'solid',
    concentration: '',
    concentrationUnit: 'mg',
    species: 'perro',
    weight: '',
    recommendedDose: '',
    doseUnit: 'mg',
  });

  const [dose, setDose] = useState(0);
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const calculateDose = () => {
    console.log('form.weight ', form.weight);
    console.log('form.recommendedDose ', form.recommendedDose);

    const dose = Number(form.weight) * Number(form.recommendedDose);
    console.log('dose ', dose);
    setDose(dose);

    if (form.form === 'solid') {
      const amount = dose / Number(form.concentration);

      if (amount === 1) {
        setAmount("1 pastilla");
      } else {
        setAmount(`${amount} pastillas`);
      }
      
    } else {
      const amount = dose / form.concentration
      setAmount(`${amount} ml`);
    }

  };

  return (
    <div className='max-w-md mx-auto p-4 mt-6'>
      <div className='flex flex-col gap-2'>    
        <label htmlFor="medicineName" className='block text-sm font-medium'>Medicine Name</label>
        <input 
          type="text" 
          className='w-full px-3 py-2 border rounded-md' 
          id="medicineName" 
          name="medicineName"
          value={form.medicineName}
          onChange={handleChange}
        />
        <label htmlFor="form" className='block text-sm font-medium'>Form</label>
        <select 
          name="form" 
          id="form" 
          className='w-full px-3 py-2 border rounded-md'
          value={form.form}
          onChange={handleChange}
        >
          <option value="solid">solid</option>
          <option value="liquid">liquid</option>      
        </select>
        <label htmlFor="concentration" className='block text-sm font-medium'>Concentration</label>
        <input 
          type="number" 
          className='w-full px-3 py-2 border rounded-md' 
          id="concentration" 
          name="concentration"
          value={form.concentration}
          onChange={handleChange}
        />
        <label htmlFor="concentrationUnit" className='block text-sm font-medium'>Concentration Unit</label>
        <select 
          name="concentrationUnit" 
          id="concentrationUnit" 
          className='w-full px-3 py-2 border rounded-md'
          value={form.concentrationUnit}
          onChange={handleChange}
        >
          <option value="mg">mg</option>
          <option value="mg/ml">mg/ml</option>      
        </select>
        <label htmlFor="species" className='block text-sm font-medium'>Species</label>
        <select 
          name="species" 
          id="species" 
          className='w-full px-3 py-2 border rounded-md'
          value={form.species}
          onChange={handleChange}
        >
          <option value="cat">cat</option>
          <option value="dog">dog</option>      
        </select>
        <label htmlFor="weight" className='block text-sm font-medium'>Weight (kg)</label>
        <input 
          type="number" 
          className='w-full px-3 py-2 border rounded-md' 
          id="weight" 
          name="weight"
          value={form.weight}
          onChange={handleChange}
        />
        <div className='flex gap-2 items-center'>
          <div className='flex flex-col '> 
            <label htmlFor="recommendedDose" className='block text-sm font-medium'>Recommended Dose</label>
            <input
              type="number" 
              className='w-full px-3 py-2 border rounded-md' 
              id="recommendedDose" 
              name="recommendedDose"
              value={form.recommendedDose}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="doseUnit" className='block text-sm font-medium'>Dose Unit</label>
            <select 
              name="doseUnit" 
              id="doseUnit" 
              className='w-full px-3 py-2 border rounded-md'
              value={form.doseUnit}
              onChange={handleChange}
            >
              <option value="mg">mg/kg</option>
              <option value="mcg">mcg/kg</option>      
            </select>
          </div>
        </div>
        <button 
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
          onClick={calculateDose}
        >Calculate</button>
      
        <p className='text-sm text-gray-500'>
          Cantidad total de medicamento = {form.weight} kg x {form.recommendedDose} mg/kg =  {dose} mg
        </p>
        
        {form.form === 'liquid' && (
        <p className='text-sm text-gray-500'>
          {dose} mg / {form.concentration} mg/ml = {amount} ml <br />
          Hay que suministrar <b> {amount} </b> de medicamento en cada dosis
        </p>)}
      
      </div>
    </div>    
  )
}

export default CalculateDosePage