import React from 'react'
import "../home.css"

export default function Home() {
  return (
    <section className='spacer layer1' id='home'>
        <h1 className='firstText'>
            Dale lo mejor a tu mascota
        </h1>
        <h2 className='secondText'>
            Distribuidora de Productos veterinarios
        </h2>
        <button class="btn myBtn">Ver mas</button>

        <div className='bubble spacer2'>
            <img src="static/Vector.svg" alt="" />
            <img src="static/blob.png" alt=""  className='homeImg'/>
        </div>
    </section>
  )
}

