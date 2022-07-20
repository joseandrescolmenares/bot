import React from "react";
import s from './css/Landing.module.css'
import Contedido from './Contedido.jsx'

const Landing = () =>{
  return (
    <>
    <div className={s.conteiner}>
    
        <section className={s.primerSeccion}>hola</section>
        <section className={s.segundaSeccion}><Contedido /></section>
        
    </div>
    </>
  )
}

export default Landing;