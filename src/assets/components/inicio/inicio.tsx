import {Container, Social} from './style';
import { SocialIcon } from "react-social-icons";
import Foto from '../../img/Rafael_Do_gas-removebg-preview.png'
import PDF from '../../img/pdf.png'

import { Header } from '../header/header';

import { Cursor } from 'react-simple-typewriter'
import { motion } from "framer-motion";

import { NavLink } from 'react-router-dom';

import Seta from '../../img/projetos/icone-fleche-droite-grise.png'


export function Inicio() {
    
   
return(
    <>  
    <Header/>  
    <Container> 
    <Social>
        <SocialIcon className='social-icon' url="https://www.linkedin.com/in/diego-niemeyer/"
            style={{width: 50, height: 50}}
            fgColor='black'
            bgColor='transparent'
            target={"_blank"}/>
        <SocialIcon url="https://github.com/dniemeryers"
        style={{width: 50, height: 50}}
            fgColor='black'
            bgColor='transparent'
            target={"_blank"}/>
        <SocialIcon url="mailto:dniemeyers@gmail.com"
         style={{width: 50, height: 50}}
            fgColor='black'
            bgColor='transparent'
            target={"_blank"}/>    
        <SocialIcon url="https://api.whatsapp.com/send?phone=5521974112744"
        style={{width: 50, height: 50}}
            fgColor='black'
            bgColor='transparent'
            target={"_blank"}/>    
    </Social>

        <div className='bio'>
            <div className="imgs">                    
                <img className="perfil" src={Foto} width="250px" alt="" />
            </div>
                <div className='descricao'>
                    <div className='helo'>
                    <div className='bolahelo'></div><p id='helo'>Olá</p>
                    </div>
                    <h2>Eu sou <p className='nome'>Rafael</p> do Gás</h2>
                <h1>Candidato a vereador de Belford Roxo<Cursor cursorColor='black' /></h1>
                            
                
                </div>   

            </div>                        
        
    
        

        <NavLink to="https://drive.google.com/file/d/   1iOKMBp0xvfcxqOO-K60MVmyALkey42tJ/view?usp=share_link" target={"_blank"}>
            <div className="button" >
            <p className='curriculo'>PROPOSTA DE CAMPANHA</p><img className="pdf" src={PDF} width="30px" height='30px;' alt="" /></div>
        </NavLink>
</Container>

    
    

    </>
    )
};