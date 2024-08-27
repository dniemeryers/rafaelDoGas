import {Container, Social} from './style';
import { SocialIcon } from "react-social-icons";
import Foto from '../../img/Rafael_Do_gas-removebg-preview.png'
import Fundo from '../../img/opoaco.png'
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
        <div className='bio'>
            <div className="imgs"> 
                <img className="perfil2" src={Fundo} alt="" />                   
                <img className="perfil" src={Foto} width="250px" alt="" />
            </div>
                <div className='descricao'>
                    <h2>Eu sou<p className='nome'>Rafael</p>do Gás</h2>
                    <h1>Candidato a vereador de Belford Roxo</h1>              
                </div>   
        </div>                                
        <NavLink to="" target={"_blank"}>
            <div className="button" >
            <p className='curriculo'>PROPOSTA DE CAMPANHA</p><img className="pdf" src={PDF} width="30px" height='30px;' alt="" /></div>
        </NavLink>

        <div>
            <div className='containerCidadao'>
                <h1 className='cidadao'>CONHEÇA O CIDADÃO</h1><div className='azul'></div><div className='laranja'></div>
            </div>
            <p className='textoCidadao'>
                Rafael Santos Soares, O Rafael do Gás é um professor, empresário da cidade de Belford Roxo e gestor público, nascido em 02 de maio de 1956 em Belford Roxo. De origem Humilde, Rafael do Gás e seu irmão Vitor foram criados pelos seus pais Antônio Soares e Rosimere da Conceição Santos Soares.
            </p>
            <p className='textoCidadao'>
                É Casado com a Gleice do Gás, com quem tem dois filhos, Arthur Nelson de 14 anos e Rafael Jr. de 06 anos.
            </p>
            <p className='textoCidadao'>
                Rafael do Gás é um defensor nato da importância do esporte como uma ferramenta que potencializa no desenvolvimento social, é um ativista das políticas públicas sociais.
            </p>
            <p className='textoCidadao'>
                Respeita todas as religiões por acreditar que todos os caminhos levam a Deus.
            </p>
            <p className='textoCidadao'>
                Um trabalhador, determinado, constante e perseverante.
            </p>
        </div>

        

    </Container>
    </>
    )
};