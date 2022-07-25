import ChatBot from 'react-simple-chatbot';
 import React from 'react';
 import { ThemeProvider } from 'styled-components'
import s from './css/Contedido.module.css'
import ReactHowler  from 'react-howler'
import musi from './music/luis-fonsi-despacito-ft-daddy-yankee.mp3'
const Contedido = () => {


  const theme = {
    background: '#f5f8fb',
    headerBgColor: '#336EFF',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#336EFF',
    botFontColor: '#fff',
    userBubbleColor: '#0cb3c9',
    userFontColor: '#fff',
    
}


const steps =[
  {
    id: '0',
    message: 'Hola! Como estas? Soy un ayudante de jose',
    trigger: '1',
  },
  {
    id: '1',
    message: '¿Como te llamas?',
    trigger: 'pregunta'
  },
  {
    id: 'pregunta',
    user:true,
    trigger: 'respuesta',
    },
    
  {
    id: 'respuesta',
    message: 'Que lindo nombre {previousValue}',
    trigger: 'cumplido'
  },

  {
    id: 'cumplido',
    message: 'Quieres ver el Portafolio de Jose? o saber un poco sobre jose ?',
    trigger: 'otrapre'
  },
  
  {
    id: 'otrapre',
    options: [
      { value: 6, label: 'Portafolio', trigger: '6' },
      { value: 7, label: 'Saber', trigger: '7' },
     
    ],
   
  },
  {
    id: '6',
    component: (
      <div> <a href='https://portfolio-joseandrescolmenares.vercel.app/' target='_blank'> <img src="https://lh3.googleusercontent.com/zr28XkZ_XrV-9l2wJpLlSLqcOxoTkKPkBHeU28xyXS2ciFQjHs60yj_oa4lnPemoDj4=s170" alt="img" /></a></div>
    ),
    trigger: 'algo'
  },
  {
    id: '7',
    message: 'Jose Andres es un joven desarrollador front-end buscando proyectos que le permitan aprender y crecer profesionalmente' ,
    trigger: 'perfil'
  },
  {
    id: 'algo',
    message: 'espero que te guste!',
    trigger: 'agradece'
  },
  
  {
    id: 'perfil',
    message: 'te dejo su Perfil de Linkedin',
    trigger: 'linkedin'
  },
  {
    id: 'linkedin',
    component: (
      <div><a href="https://www.linkedin.com/in/jose-colmenares-480074233/"><img className={s.img} src="https://img.icons8.com/color/344/linkedin.png" alt="linkedin" /></a></div>
    ),
    trigger: 'agradece'
  },
  {
    id: 'agradece',
    message: 'Muchas gracias por participar! ',
    trigger: 'antes'
  },
  {
    id: 'antes',
    message: 'antes de irte   quieres escuchar musica? ',
    trigger: 'escuchar'
  },
  {
    id: 'escuchar',
    options: [
      { value: 'musi', label: 'si', trigger: 'musi' },
      { value: 'no', label: 'No', trigger: 'bueno' },
     
    ],
  },
  {
    id: 'bueno',
    message: 'Bueno espero que me contactes igual',
    
  },
  {
    id: 'musi',
    component: (
      <div><ReactHowler src={musi} playing={true}/></div>
    ),
    trigger: 'bien'
  },
  {
    id: 'bien',
    message: 'ahora si, hasta pronto 👋',
    
  },
  
 
];



    return (
    <div>
       
      <ThemeProvider theme={theme}><ChatBot userAvatar={'https://i.pinimg.com/564x/07/2a/bf/072abf26de0a8e390dd9961f787f4583.jpg'} speechSynthesis={ {enable : true, lang: 'es', voice: null }} floating={false} botAvatar={'https://pbs.twimg.com/profile_images/1478477859098349573/UywGxIPn_400x400.jpg'}   steps={steps} /></ThemeProvider>
    </div>
    )
}


export default Contedido;


