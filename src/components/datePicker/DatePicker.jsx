import React from 'react'
import { useState } from 'react'
import './DatePicker.css'

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <div className='datePicker-wrapper'>
      <h2>Reserva tu plaza</h2>
      <div className='datePicker-text-wrapper'>
        <div className='datePicker-label-name-wrapper'>
          <label className='datePicker-label'>Nombre</label>
          <input className='datePicker-input' type="text" />
        </div>
        <div className='datePicker-label-subname-wrapper'>
          <label className='datePicker-label'>Apellidos</label>
          <input className='datePicker-input' type="text" />
        </div>
      </div>
      <div className='datePicker-date-wrapper'>
        <label className='datePicker-label'>Selecciona una fecha</label>
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      </div>
      <button className='btn-p'>Reservar</button>
    </div>
  )
}

export default DatePicker