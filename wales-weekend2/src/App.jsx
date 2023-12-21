import { useState } from 'react'
import Snowfall from 'react-snowfall'
import FirstQuestion from './components/FirstQuestion'
import ImageContainer from './components/ImageContainer'
import Present from './components/Present'
import SecondQuestion from './components/SecondQuestion'
import Success from './components/Success'
import ThirdQuestion from './components/ThirdQuestion'

const App = ()=> {
  const [picToShow, setPicToShow] = useState(0);

  return (
    <div className=" text-white w-full bg-gradient-to-b h-screen from-[#0d135c] via-[#2c348f] to-white ">
     <Snowfall />

    <div className='w-full flex pt-12 flex-col justify-center items-center'>
      <h1 className="text-white text-5xl">To Mum and Dad</h1>
      <div className=' font-serif text-6xl'>Merry Christmas</div>
    <div className="w-screen flex justify-center items-center">
  <Present onClick={()=>{
        setTimeout(()=>setPicToShow(1),1000);
  }} showPresent={picToShow === 0}/> 
  <ImageContainer picNumber={picToShow} /></div>
  <Success showSuccess={picToShow === 4} />
   {picToShow === 1 && ( <FirstQuestion onClick={()=>{
  setTimeout(()=>
    {
      setPicToShow(2);
    },1000)
    }}/>)}
       {picToShow === 2 && ( <SecondQuestion onClick={()=>{
  setTimeout(()=>
    {
      setPicToShow(3);
    },1000)
    }}/>)}
      {picToShow === 3 && ( <ThirdQuestion onClick={()=>{
  setTimeout(()=>
    {
      setPicToShow(4);
    },1000)
    }}/>)}
      </div>
    </div>
  )
}

export default App
