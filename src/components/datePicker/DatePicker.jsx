import React from 'react'
import { useState } from 'react'
import './DatePicker.css'

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <section className='section-form'>
      <h2>Reserva tu plaza</h2>
      <div className='date-picker-content-wrapper'>
        <div className='datePicker-wrapper'>
          <div className='datePicker-text-wrapper'>
            <div className='datePicker-label-name-wrapper'>
              <label className='datePicker-label' for="name" >Nombre</label>
              <input className='datePicker-input' id='name' name='name' placeholder='Nombre' type="text" />
            </div>
            <div className='datePicker-label-subname-wrapper'>
              <label className='datePicker-label' for="subname">Apellidos</label>
              <input className='datePicker-input' name='subname' id='subname' placeholder='Apellidos' type="text" />
            </div>
          </div>
          <div className='datePicker-date-wrapper'>
            <label className='datePicker-label' for="date-picker" >Selecciona una fecha</label>
            <input type="date" id='date-picker' value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          </div>
          <button className='btn-p'>Reservar</button>
        </div>
      </div>
    </section>
  )
}

export default DatePicker