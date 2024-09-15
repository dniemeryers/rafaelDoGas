import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Container2, Social } from './style';
import { motion } from 'framer-motion'


import { SocialIcon } from "react-social-icons"
import Foto from '../../img/perfil-diego.png'
import PDF from '../../img/pdf.png'


export function Header() {

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  

  return (<>
    <Container style={{zIndex: '3'}}  >
      <div className="icons">
      <motion.div
             initial={{
                x: 1500,
                opacity: 0,
                scale: 0.5,
             }}
             animate={{
                x: 0,
                opacity: 1,
                scale: 1,
             }}
             transition={{
                duration: 2.5,
             }}>
        <h1>Rafael do Gás</h1>
        </motion.div>
        <NavLink to="" target={"_blank"}>
          <div className="button" >
              <p className='curriculo'>PROPOSTA DE CAMPANHA</p><img className="pdf" src={PDF} width="30px" height='30px;' alt="" />
          </div>
        </NavLink>
        <Social>
        <SocialIcon className='social-icon' url="https://www.instagram.com/rafaeldogasoficial86?igsh=MWptZzdjazA1eDZ0ag=="
            style={{width: 35, height: 35}}
            fgColor='#ED6B21'
            bgColor='transparent'
            target={"_blank"}/>
        <SocialIcon url="https://www.facebook.com/share/XbUUzx2fpbq42HVw/?mibextid=qi2Omg"
        style={{width: 35, height: 35}}
           fgColor='#ED6B21'
            bgColor='transparent'
            target={"_blank"}/>
        <SocialIcon url="mailto:contato@rafaeldogas.com.br"
         style={{width: 35, height: 35}}
            fgColor='#ED6B21'
            bgColor='transparent'
            target={"_blank"}/>    
        <SocialIcon url="mailto:dniemeyers@gmail.com"
       style={{width: 35, height: 35}}
           fgColor='#ED6B21'
            bgColor='transparent'
            target={"_blank"}/>    
    </Social>
       {/*} <div className="menu">
          <input type="checkbox" id="checkbox-menu"  checked={isMenuOpen} onChange={handleMenuClick} />
          <label style={{zIndex: '1'}} htmlFor="checkbox-menu">
            <span></span>
            <span></span>
            <span></span>
          </label>
            </div>*/}
       {/* <div className='links-desktop'>
          <NavLink className={'navlink'} to="/home">Home</NavLink>
          <NavLink className={'navlink'} to="/sobre">Sobre</NavLink>
          <NavLink className={'navlink'} to="/educacao">Formação</NavLink>
          <NavLink className={'navlink'} to="/projetos">Projetos</NavLink>
          <NavLink className={'navlink'} to="/experiencia">Experiências</NavLink>
          
          <NavLink to="https://drive.google.com/file/d/1iOKMBp0xvfcxqOO-K60MVmyALkey42tJ/view?usp=share_link" target={"_blank"}><div className="button" ><p className='curriculo'>CURRICULO</p><img className="perfil" src={PDF} width="20px" height='20px;' alt="" /></div></NavLink>
        </div>*/}
      </div>
    </Container>
    {/*<Container2>
      <motion.div 
             initial={{
                y: -4500,
                opacity: 0,
             }}
             animate={{
                y: isMenuOpen ? '30rem' : '0%',
                
               
                opacity: isMenuOpen ? 1 : 0,
                
             }}
             transition={{
                duration: isMenuOpen ? 0.75 : 1,
                
             }}
             style={{ 
                position: !isMenuOpen ? 'relative':'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                             
             }}>
              
      <div className="nav" style={{ 
        display: isMenuOpen ? 'block' : 'none',
        
        }}>
        <img className="perfil" src={Foto} width="100px" alt="" />            
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/educacao">Formação</NavLink>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/experiencia">Experiências</NavLink>             
        <NavLink to="https://drive.google.com/file/d/1iOKMBp0xvfcxqOO-K60MVmyALkey42tJ/view?usp=share_link" target={"_blank"}>Curriculo</NavLink>
        <Social>
          <SocialIcon className='ic' url="https://www.linkedin.com/in/diego-niemeyer/"
            fgColor='#BFBFBF'
            bgColor='transparent'
            target={"_blank"}/>
          <SocialIcon className='ic' url="https://github.com/dniemeryers"
            fgColor='#BFBFBF'
            bgColor='transparent'
            target={"_blank"}/>
          <SocialIcon url="mailto:dniemeyers@gmail.com"
              fgColor='#BFBFBF'
              bgColor='transparent'
              target={"_blank"}/>    
          <SocialIcon className='ic' url="https://api.whatsapp.com/send?phone=5521974112744"
            fgColor='#BFBFBF'
            bgColor='transparent'
            target={"_blank"}/>     
        </Social>               
      </div>
      </motion.div>   
    </Container2>*/}
  </>);
}
 