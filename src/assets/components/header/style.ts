import React from 'react';
import styled from "styled-components"; 

export const Social = styled.div`
    z-index:4;
    display:flex;
    flex-direction: row;
    margin:0 0 0 5px 0;

  
    
   
   a{
   margin:0; 
   }
    .social-icon{
        &:hover{
            color:black;
        }
    }
    @media (min-width: 800px) {
       

    }
.social-icon{
    width:5px;
    border: solid 1px #ED6B21;
    border-radius: 50%;
    margin:10px 0 0 5px;

    @media (min-width: 400px) {
       width: 45;
       height: 45;

    }

  
}
    
`

export const Container = styled.div`

font-family: Arial, sans-serif;
position:fixed;
top:0;
background-color: #23262f;
box-shadow: 0px 0px 10px 5px black;
z-index:5;
color: #ED6B21;
font-weight:bold;
justify-content:space-betweem;
width:100%;

.button {  
  margin-top:12px;
  padding:0;
  display:flex;
  width: 120px;
  height: 30px;    
 
  text-align:center;
  color: #fff;
  font-size:12px;
  background-color:rgba(179,179,179,0.4);
  box-shadow: 0px 0px 10px 5px #FF0000;

  &:hover {
    scale:1.2;
    transform: scale(1.01);
  }
  .curriculo{
    display:flex;
    margin:auto;
    font-weight:bold;
 }
 img{
  margin:auto;
  margin-left:-10px;
}
}
h1{
  margin: 15px 0 0 15px;
  font-size:1.3rem;

  

  
}

.icons{
   display:flex;
   height:55px;
   justify-content:space-between;
   margin:0 20px 0px 0;
   

     
}

.links-desktop{
  display:flex;
  margin:0px 0 0 20px;


  @media (max-width: 800px) {
    display:none;
    }
}
.navlink{
  color:#BFBFBF;
  font-weight:bold;
  margin:20px 20px 10px 0;
  font-size:1rem;
  &:hover{
    color:white;
  }
}

a{
   text-decoration:none; 
   color:white;
   @media (max-width: 800px) {
    margin-left:20px;
    }
}
.menu{
    width:0px;
    @media (min-width: 800px) {
      display:none;
      }
    
}


.container{
    width:100%;
    height: 100%;
    display: flex;
    
  }
#checkbox-menu{
  display:flex;
    padding:0;
    margin:auto;
    display:flex;
    justify-content:center;
    opacity: 0;
  }
  
  label{
    cursor: pointer;
    position: relative;
    display: block;
    height: 22px;
    width: 30px;
  }
  
  label span{
    position: absolute;
    display: block;
    height: 5px;
    width: 100%;
    border-radius: 30px;
    background: #BFBFBF;
    transition: 0.25s ease-in-out;
  }
  
  label span:nth-child(1){
    top: 0;
  }
  
  label span:nth-child(2){
    top: 8px;
  }
  
  label span:nth-child(3){
    top: 16px;
  }
  
  #checkbox-menu:checked + label span:nth-child(1){
    transform: rotate(-45deg);
    top: 8px;
  }
  
  #checkbox-menu:checked + label span:nth-child(2){
    opacity: 0;
  }
  
  #checkbox-menu:checked + label span:nth-child(3){
    transform: rotate(45deg);
    top:8px;
  }

.list{
    background-color: #FF0000;
    width:40%;
    display:flex;
    justify-content: flex-end;
   


}
.itemList{
    color:black;
}
`
export const Container2 = styled.div`

z-index:4;
color:#BFBFBF;
heigth:500px;

.perfil{
  margin-top:100px;
  margin-bottom:20px;
}
h3{
  margin-top:10px;
  text-align:center;
}
a{
  color:#BFBFBF;
  text-decoration:none;
  font-weight:bold;
  font-size: 18px;
  display:flex;
  justify-content:left;
  padding:10px 0 10px 0;
  zIndex:100;
  border-top: 1px solid #4a4a4a;
 
}

.nav{
  height:550px;
  width:95%;  
  margin-top:-500px;
  z-index:10000;
  
  
  display:flex;
  flex-direction:colunm;
  font-size:1rem;   
  padding:10px; 
  background-color: rgb(24,24,24);
  transition: transform 2s ease-in-out;
  
    
}
img{
  display:flex;
  margin-top:200px;
  border-radius:50%;
  margin:auto;
}

`


