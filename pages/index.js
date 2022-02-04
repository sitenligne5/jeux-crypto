/** @jsxImportSource @emotion/react */
import React,{useState,useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Header from './head'
import { css, jsx, keyframes  } from '@emotion/react'
import Confetti from 'react-confetti'
import copy from 'copy-to-clipboard';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const myfirst = keyframes`
  0%{
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100%{
    transform: translate(-50%, -50%) rotate(360deg);
  }
`
const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
   
    color:rgb(3 44 159 / 75%);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
    color: #ed3f3f;
  }

  70% {
    transform: translate3d(0, -15px, 0);
    color:rgb(3 44 159 / 75%);
  }

  90% {
    transform: translate3d(0,-4px,0);
    color: #ed3f3f;
  }
`

const button = keyframes`
0%{
  transform: scale(1);
}
50%{
  transform: scale(1.3);
}
100%{
  transform: scale(1);
}
`

const useStyle = makeStyles(theme => ({
  
 
 rowflew:{
 
 'height': '100%',
  'width': '100%',
  'transform': 'scale(1.5)',
 }

  
})
)





export default function Index() {
  const classes = useStyle()
  const [startGame,setStartGame] = useState('_playGame')
  const [startConfetis,setStartConfetis] = useState(false)
  const [width, setWidth]   = useState('');
   const [height, setHeight] = useState('');

  
    const updateDimensions = () => {
       
      

       setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      
    }

    const _cp_phrase = () => {
      copy('control afford short never skin logic dawn upset garden crush boring gauge');
    }
    
    useEffect(() => {
      

      if (typeof window !== 'undefined') {
         
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        
      }
      
      
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);

  


  const playGame = () => {

    setStartGame('playGame')

    setTimeout(() => {
     
      setStartGame('_playGame')
      setStartConfetis(true)
    }, 4500)

  }
  
  return (
      <div>
          <Header/>
           {
             startConfetis == true && (
                <Confetti
                  width={width}
                  height={height}
                />
             )

           }


         {
             startConfetis == true && (
                
               <div 
                className='modale'
                css={css`
                    background-color: rgb(80 119 227 / 26%);
                    height: 100vh;
                    width: 100%;
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
               `}
               >
                     <div 
                      className='modale_content'
                      css={css`
                          height: auto;
                          background-color: white;
                          width: 68%;
                          z-index: 100;
                          padding: 17px;
                          border-radius: 44px;
                          box-shadow: 5px 17px 80px 52px rgb(50 53 62 / 61%);
                         
                                
                                @media only screen and (max-width: 719px) and (min-width: 667px){
                                  
                                  width: 85%;
                                }
                                @media only screen and  (max-width: 667px) and (min-width: 0px){
                                  width: 85%;
                                }

                          `}
                      >
                          <div  
                           className='modale_content_text-feli'
                           css={css`
                                font-size: 1rem;
                                padding: 37px;
                                text-align: center;
                                font-weight: bold;
                                color:rgb(3 44 159 / 75%);
                                animation: ${bounce} 1s ease infinite;
                                @media only screen and (max-width: 1024px) and (min-width: 986px){}
                                @media only screen and (max-width: 985px) and (min-width: 800px){
                                  font-size: 1rem;
                                }
                                @media only screen and (max-width: 799px) and (min-width: 720px){
                                  font-size: 1rem;
                                }
                                @media only screen and (max-width: 719px) and (min-width: 667px){
                                  font-size: 0.9rem;
                                  padding: 20px;
                                }
                                @media only screen and  (max-width: 667px) and (min-width: 0px){
                                  font-size: 0.9rem;
                                  padding: 20px;
                                }
                              `}
                          > 
                            Félicitations, vous venez de gagner différents types de cryptomonnaies.
                           Veuillez appuyer sur le bouton pour réclamer votre code secret.
                          </div>
                     
                          <div 
                           className='modale_content_text-copy'
                           css={css`
                               background-color: rgb(0 50 187 / 75%);
                                height: 50px;
                                width: 300px;
                                margin: auto;
                                cursor: pointer;
                                text-align: center;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                color: #fff;
                                font-weight: bold;
                                box-shadow: 0px 23px 32px -9px rgb(82 122 231 / 67%);
                                @media only screen and (max-width: 1024px) and (min-width: 986px){}
                                @media only screen and (max-width: 985px) and (min-width: 800px){
                                  font-size: 1rem;
                                }
                                @media only screen and (max-width: 799px) and (min-width: 720px){
                                  font-size: 1rem;
                                }
                                @media only screen and (max-width: 719px) and (min-width: 667px){
                                  font-size: 0.7rem;
                                  height: auto;
                                  width: 80%;
                                  padding: 8px 3px;
                              
                                }
                                @media only screen and  (max-width: 667px) and (min-width: 0px){
                                  

                                  font-size: 0.7rem;
                                  height: auto;
                                  width: 80%;
                                  padding: 8px 3px;

                                }
                                &:hover{
                                  background-color: rgb(32 92 255 / 75%);
                                }
                             `
                           }
                           onClick={() => _cp_phrase()}
                           >Appuyer ici pour copier les 12 mots.</div>

                          <div 
                           className='modale_content_text-copy_phrase'
                           css={css`
                                text-align: center;
                                padding: 50px;
                                font-weight: bold;
                                color: red;
                                @media only screen and  (max-width: 719px) and (min-width: 0px){
                                  font-size: 0.7rem;
                                  padding: 20px;
                                }
                               `}
                           >
                            Attention ne jamais partagez votre code.
                          </div>

                          <div 
                           className='modale_content_text-copy_phrase'
                           css={css`
                                text-align: center;
                                font-weight: bold;
                                
                                @media only screen and  (max-width: 719px) and (min-width: 0px){
                      
                                  font-size: 0.7rem;
                                  padding: 20px;

                                }
                               `}
                           >
                            Félicitation Bonne chance !!!!
                          </div>

                    </div>
               </div>   

             )

           }
           <div 
            className='msg-div'
            css={css`
                height: 20vh;
                width: 100%;
                padding: 1%;
                display: flex;
                justify-content: center;
                align-items: center;
                @media only screen and (max-width: 1024px) and (min-width: 986px){}
                @media only screen and (max-width: 985px) and (min-width: 800px){}
                @media only screen and (max-width: 799px) and (min-width: 720px){}
                @media only screen and (max-width: 719px) and (min-width: 667px){}
                @media only screen and  (max-width: 667px) and (min-width: 0px){}
              `}
            
          >

              
              
               <div 
               className='msg-text'
               css={css`
                    width: 98%;
                    height: auto;
                    background-color: rgb(160 182 242 / 10%);
                    border-radius: 11px;
                    padding: 5px;
                    text-align: center;
                    box-shadow: 5px 17px 80px 52px rgb(82 122 231 / 67%);
                    font-weight: bold;
                    margin: auto;
                    @media only screen and (max-width: 1024px) and (min-width: 986px){}
                    @media only screen and (max-width: 985px) and (min-width: 800px){}
                    @media only screen and (max-width: 799px) and (min-width: 720px){}
                    @media only screen and (max-width: 719px) and (min-width: 667px){
                      font-size: 13px;
                      width: 80%;
                    }
                    @media only screen and  (max-width: 667px) and (min-width: 0px){
                      font-size: 13px;
                      width: 80%;
                    }
               `}
               > 
                  <p>

                  Jouez et gagnez des cryptomonnaies - Tentez votre chance !!!!

                  </p>
               </div>
         
           </div>
           <div 
            className='roulette-zn'
            css={css`
                  height: 80vh;
                  width: 100%;
                  padding: 1%;
               `}
            >
                 <div className='roulette-zn-div'
                  css={css`
                        height: 370px;
                        width: 370px;
                        background-color: #ffff;
                        margin: auto;
                        box-shadow: 5px 17px 70px -15px rgb(80 119 227 / 75%);
                        position: relative;
                        @media only screen and (max-width: 1024px) and (min-width: 986px){}
                        @media only screen and (max-width: 985px) and (min-width: 800px){}
                        @media only screen and (max-width: 799px) and (min-width: 720px){}
                        @media only screen and (max-width: 719px) and (min-width: 667px){
                          height: 310px;
                          width: 310px;
                        }
                        @media only screen and  (max-width: 667px) and (min-width: 0px){
                          height: 310px;
                          width: 310px;
                        }
                    `}
                 >

                 <div
                   className = 'roulette-zn-row'
                    css={css`
                      height: 40px;
                      width: 40px;
                      transform: translate(-2%, -50%);
                      position: absolute;
                      top: 50%;`
                     }
                 > 
                       <ArrowRightIcon sx={{ color: 'red', fontSize: 50}} className={classes.rowflew} />
                 </div>
                        {
                            startGame == 'playGame' ? 

                            <img src='./roulette.png'
                                css={css`
                                  width: 250px;
                                  height: 250px;
                                  position: absolute;
                                  left: 50%;
                                  top: 50%;
                                  transform: translate(-50%,-50%);
                                  animation: ${myfirst} .5s linear infinite;
                                  animation-iteration-count: 8;
                                  @media only screen and (max-width: 1024px) and (min-width: 986px){}
                                  @media only screen and (max-width: 985px) and (min-width: 800px){}
                                  @media only screen and (max-width: 799px) and (min-width: 720px){}
                                  @media only screen and (max-width: 719px) and (min-width: 667px){
                                  height: 200px;
                                  width: 200px;
                                  }
                                  @media only screen and  (max-width: 667px) and (min-width: 0px){
                                    height: 200px;
                                    width: 200px;
                                  }
                                  `}
                       />

                       :

                            <img src='./roulette.png'
                              css={css`
                                width: 250px;
                                height: 250px;
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%,-50%);
                                @media only screen and (max-width: 1024px) and (min-width: 986px){}
                                @media only screen and (max-width: 985px) and (min-width: 800px){}
                                @media only screen and (max-width: 799px) and (min-width: 720px){}
                                @media only screen and (max-width: 719px) and (min-width: 667px){
                                height: 200px;
                                width: 200px;
                                }
                                @media only screen and  (max-width: 667px) and (min-width: 0px){
                                  height: 200px;
                                  width: 200px;
                                }
                                  
                            `}
                       />

                        }
                        
                 </div>

                 <div
                 css={css`
                      height: 50px;
                      width: 200px;
                      background-color: rgb(0 50 187 / 75%);
                      margin: auto;
                      margin-top: 50px;
                      cursor: pointer;
                      text-align: center;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      color: #fff;
                      font-weight: bold;
                      animation: ${button} 1s ease infinite;
                      &:hover{
                        background-color: rgb(32 92 255 / 75%);
                      }
                    `}
                  
                    onClick = {()=>playGame()}
                >
                     Jouer maintenant !!
                 </div>


           </div>

           

      </div>
  );
}
