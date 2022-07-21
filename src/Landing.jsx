import React from "react";
import s from './css/Landing.module.css'
import Contedido from './Contedido.jsx'

const Landing = () =>{
  return (
    <>
    <div className={s.conteiner}>
    
        <section className={s.primerSeccion}>
            <div className={s.div}>
                
            <h1 className={s.h1}>este es un chatbot que realize mientra sigo en  busqueda laboral, espero que los disfrutes 👋😀</h1>
            </div>
        </section> 
        <section className={s.segundaSeccion}><Contedido /></section>
        
    </div>
    </>
  )
}

export default Landing;