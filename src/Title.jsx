import React from 'react'

function Title({count}) {
  return (
    <div>
        <h2 className='app-title'>{count} birthdays today</h2>
    </div>
  )
}

export default Title