import { useState } from 'react'
import Snowfall from 'react-snowfall'
import FirstQuestion from './components/FirstQuestion'
import Present from './components/Present'

const App = ()=> {
  const [showFirstQuestion, setShowFirstQuestion] = useState(false)
  const [showSecondQuestion, setShowSecondQuestion] = useState(false)
 
  return (
    <div className=" text-white w-full bg-gradient-to-b h-screen from-[#0d135c] via-[#2c348f] to-white ">
     <Snowfall />

    <div className='w-full flex pt-12 flex-col justify-center items-center'>
      <h1 className="text-white text-5xl">To Mum and Dad</h1>
      <div>Merry Christmas</div>
    <Present onClick={()=>setShowFirstQuestion(!showFirstQuestion)}/>
   {showFirstQuestion && ( <FirstQuestion onClick={()=>setShowSecondQuestion(!showSecondQuestion)}/>)}
      </div>
    </div>
  )
}

export default App
