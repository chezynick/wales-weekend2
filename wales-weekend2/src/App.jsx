import { useState } from 'react'
import Snowfall from 'react-snowfall'
import FirstQuestion from './components/FirstQuestion'
import ImageContainer from './components/ImageContainer'
import Present from './components/Present'
import SecondQuestion from './components/SecondQuestion'
import Success from './components/Success'
import SleighBells from './assets/sleighBells.mp3'
import useSound from 'use-sound';
import ThirdQuestion from './components/ThirdQuestion'

const App = ()=> {
  const [picToShow, setPicToShow] = useState(0);
  const [snowFlakes, setSnowFlakes] = useState(150)
  const moveAlong = () => {
    if(picToShow ===0)play()
    setTimeout(()=>{
      setPicToShow(picToShow + 1);
      setSnowFlakes(snowFlakes + 300)
    },300)
  }
  const [play] = useSound(SleighBells);
  return (
    <div className=" text-white w-full bg-gradient-to-b h-screen overflow-hidden from-[#0d135c] via-[#2c348f] to-white ">
     <Snowfall snowflakeCount={snowFlakes}/>
  
  <div className='w-full flex pt-12 flex-col justify-center items-center'>
  {picToShow === 0 &&(  <div className="flex flex-col items-center">
      <h1 className="text-white text-5xl">To Mum and Dad</h1>
      <div className=' font-serif text-6xl'>Merry Christmas</div></div>)}
    <div className="w-screen flex justify-center items-center">
  <Present onClick={()=> moveAlong()} showPresent={picToShow === 0}/> 
  <ImageContainer picNumber={picToShow} /></div>
  <Success showSuccess={picToShow === 4} />
   {picToShow === 1 && ( <FirstQuestion onClick={()=> moveAlong()}/>)}
       {picToShow === 2 && ( <SecondQuestion onClick={()=> moveAlong()}/>)}
      {picToShow === 3 && ( <ThirdQuestion onClick={()=> moveAlong()}/>)}
      </div>
    </div>
  )
}

export default App
