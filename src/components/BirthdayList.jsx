import React from 'react'

function BirthdayList({birthdays , deleteItem}) {
  return (
    <ul className='List'>
        {birthdays.map((item)=>{
            return <li key={item.id} className='Card'>
                <img className='img' src={item.image} alt="" />
                <h4 className="title">{item.name} <span>{item.age} years</span></h4>
                <button className='item-btn' onClick={()=>deleteItem(item.id)}>Delete</button>
            </li>
        })}
    </ul>
  )
}

export default BirthdayList