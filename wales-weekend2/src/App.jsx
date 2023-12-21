import { useState } from 'react'
import Snowfall from 'react-snowfall'
import FirstQuestion from './components/FirstQuestion'
import ImageContainer from './components/ImageContainer'
import Present from './components/Present'

const App = ()=> {
  const [showFirstQuestion, setShowFirstQuestion] = useState(false)
  const [showSecondQuestion, setShowSecondQuestion] = useState(false)
  const [picToShow, setPicToShow] = useState(0);
  return (
    <div className=" text-white w-full bg-gradient-to-b h-screen from-[#0d135c] via-[#2c348f] to-white ">
     <Snowfall />

    <div className='w-full flex pt-12 flex-col justify-center items-center'>
      <h1 className="text-white text-5xl">To Mum and Dad</h1>
      <div>Merry Christmas</div>
    <div className="w-screen flex justify-center items-center">
  <Present onClick={()=>setShowFirstQuestion(true)} showPresent={picToShow === 0}/> 
  <ImageContainer picNumber={picToShow} /></div>
  
   {showFirstQuestion && ( <FirstQuestion onClick={()=>{setShowSecondQuestion(!showSecondQuestion)
  setTimeout(()=>{setPicToShow(1),1000})}}/>)}
      </div>
    </div>
  )
}

export default App
