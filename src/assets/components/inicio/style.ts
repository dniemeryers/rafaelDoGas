import styled from "styled-components"; 





export const Social = styled.div`

    display:flex;
    flex-direction: row;
    margin-left:20px;
   
   
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
color: black;
heigth:100%vh;
margin-top:30px;
margin-bottom:160px;


@media (min-width: 800px) {
    margin-botton:50px;
}

.button {  
    display:flex;
    width: 250px;
    height: 50px;    
    margin:auto;
    margin-top:80px;
    margin-bottom:250px;
    text-align:center;
    color: black;
    background-color:;  
    font-size:18px;
    box-shadow: 0px 0px 10px 5px black;
    
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
    
    font-size:2.2em;
    text-align:center;
    padding:0px;
    margin-top:0px;
}
h2{
    font-size:1.8em;
    margin-top:0;
    color: black;
    margin-bottom:0;
    
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

    @media (min-width: 800px) {
       margin-left:-50px;

    }
}
.helo{
    display:flex;
}
#helo{
    margin-left:-20px;
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
   display:flex;
   flex-direction:column;
   margin:auto;
   
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
p{
    margin:0px;
    margin-left:4px;
}
.perfil{   
  
    border-radius: ;
    
    width:100%;
    margin:auto;

    @media (min-width: 800px) {
       
        background-color:transparent;
        width:350px;

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