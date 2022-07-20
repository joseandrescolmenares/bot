import React from "react";
import s from './css/Landing.module.css'
import Contedido from './Contedido.jsx'

const Landing = () =>{
  return (
    <>
    <div className={s.conteiner}>
    
        <section className={s.primerSeccion}>
            <div className={s.div}>
                
            <h1 className={s.h1}>este es un BotChat que realize mientra busco mi primera trabajo  espero que los disfrute</h1>
            </div>
        </section> 
        <section className={s.segundaSeccion}><Contedido /></section>
        
    </div>
    </>
  )
}

export default Landing;