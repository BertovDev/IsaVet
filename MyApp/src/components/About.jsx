import React from 'react'
import "../App.css"


export default function About() {
    return (
        <section className='spacer' id='about'>
            <h1 className='tittle'>¿ Quienes somos ?</h1>
            <div className='infoSection'>
                <h1 className='tittle2'>Somos una distribuidora de productos veterinarios</h1>
                <h4 className='info'>Ventas de insumos para chicos y medianos animales.Contamos con mas de diez laboratorios de alta confianza. Realizamos envios a todo el pais.
                    Pongamosnos en contacto!</h4>
                <div className='btns'>
                    <button className='btn'>Contactanos</button>
                    <button className='btn'>Ver Productos</button>
                </div>
            </div>
            <div className='bubble2'>
                <img src="static/Vector.png" alt="" className='vector' />
                <img src="static/dog.png" alt="" className='dog' />
            </div>
        </section>
    )
}







