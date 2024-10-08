import styled from "styled-components"; 





export const Social = styled.div`

    display:flex;
    flex-direction: row;
    margin-left:20px;
    
    background: linear-gradient(to top, #d26c21, white);
   
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
    width:10px;
    border: solid 1px black;
    border-radius: 50%;
    margin:55px 0 0 5px;
}
    
`


export const Container = styled.div`


height:100%;
color: black;

margin-top:0px;

@media (max-width: 800px) {

 background: linear-gradient(to top, #d26c21, white);     

}

.responsiv{



        @media (min-width: 800px) {
            display:flex;
        }


}

@media (min-width: 800px) {
    margin-botton:50px;
}

.button {  
    display:flex;
    width: 250px;
    height: 50px;    
    margin:auto;
    margin-top:30px;
    margin-bottom:50px;
    text-align:center;
    color: #d26c21 ;
    background-color:#23262f;  
    font-size:18px;
    box-shadow: 0px 0px 10px 5px  #d26c21;
    
    @media (min-width: 800px) {
        display:none;
    }
  }
img{
    
    margin:auto;
    margin-left:-10px;
}
  a{
    text-decoration:none; 
    text-align:center;
    color:white;
}
.curriculo{
   margin:auto;
   font-weight:bold;
}

.seta{
    width:60px;
    position:absolute;    
    right:0;
    top:500px;
    @media (max-width: 500px) {
        display:none;
    }
}

h1{
    font-family: Arial, sans-serif;
    font-size:2.2em;
    text-align:center;
    padding:0px;
    margin:5px;
    margin-top:15px;

     @media (min-width: 800px) {
         text-align:start;

         }

}
h2{
    font-family: Arial, sans-serif;
    font-size:1.8em;
    margin-left:10px;
    margin-top:10;
    color: black;
    margin-bottom:0;
   
}





.containerCidadao{
display:flex;
flex-direction: row;

 @media (min-width: 800px) {
         width:60%;

         }
}


.containerCidadao2{
display:flex;
flex-direction: row;
width:100%;
padding:0
margin:0;

      @media (min-width: 800px) {
           
        position: fixed;
        bottom: 0;
        left: 0;

      }      
}

.cidadao{
display:flex;
color: #d26c21;
font-size: 26px;
text-align:start;
margin:0;
justify-content: center;
align-items: center;


padding-left:20px;
width: 75%;
height: 40px;


background-color: #23262f;

}

.cidadao2{
display:flex;
color: #d26c21;
font-size: 15px;

margin:0;
margin-top:20;
padding:0;
justify-content:center;
align-items: center;
width: 110%;
height: 40px;

background-color: #23262f;

         
}

.azul{
z-index:1;
margin-left:-1px;
width:2px;
height:-2px;
margin-top:-1px;

border-top:0px;
border-right:10px solid transparent;
border-bottom:40px solid #23262f;
  
}

.laranja{
z-index:1;
margin-left:-10px;
width:8px;
height:4px;
margin-top:0px;

border-top:0px;
border-right:8px solid transparent;
border-bottom: 30px solid #d26c21;
}


.textoCidadao{
font-family: Arial, sans-serif;
text-indent:px;
margin:15px;

        @media (min-width: 800px) {
        font-size:18px;

        }
}


.bio{
    width:100%;
    display:flex;
    flex-direction:column;
    margin:auto;

   

    @media (min-width: 800px) {
        flex-direction:row;

    }
    
}
.descricao{
    margin:auto;
    margin-top:500px;
    
   

    @media (min-width: 800px) {
       margin-left:-50px;
       margin-top:50px;
       

    }
}

}
#helo{
    margin-left:;
    font-size:27px;
}
 
.bolahelo{
    margin-top:-10px;
    width:30px;
    height:30px;
    background-color: black;
    border-radius:50%;
}

.imgs{
   z-index:2;
   position:fixed;
   top:0;
   display:flex;
   flex-direction:column;
   margin:0
   margin-top:-50px;
   
   
}
.nome{
    color: black;
    display:inline;
    font-size:1.8rem;
    
}
.icons{
    margin:7px;
    display:flex;
    
}

.perfil{   
     object-fit: cover; 
     object-position: 0 -65px; 
     border-radius: ;
     z-index:4;
    
    width:100%;
    margin:auto;
    margin-top:-178px;

    @media (min-width: 800px) {
       
        background-color:transparent;
        margin-left:px;
         margin-top:60px;
       

    }
}

.perfil2{   
     object-fit: cover; 
     z-index: 4;
     height:280px;

     
        
    width:100%;
    margin-bottom:0;    
    margin:auto;
    margin-top: -35px;

    @media (min-width: 800px) {
       
        background-color:transparent;
       
        margin-left:10px;
        display:none;

    }
}  


.pdf{
    width:35px;
    margin-right:10px;
}
.sobre{
    text-indent: 10%;
    text-align:justify;
    margin:10px;
}


`