import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='container'>
        <div class="row">
            <div class="col-md-4">
                <Card />
            </div>
            <div class="col-md-4">
                <Card />
            </div>
            <div class="col-md-4">
                <Card />
            </div>
        </div>

    </div>
  )
}

export default Cards
