/* eslint-disable react/prop-types */
import HappyDad from '../../images/happyDad.png'
import HappyMum from '../../images/happyMum.png'
import FirstMum from '../../images/firstMum.png'
import GiddyMum from '../../images/giddyMum.png'
import UnimpressedDad from '../../images/unimpressed.png'
import SantaHat from '../../images/santaHat.png'
import Cheers from '../../images/cheers.png'
import GrumpyDad from '../../images/grumpyDad.png'
import { useEffect } from 'react'
import { useState } from 'react'


const ImageContainer = ({picNumber}) => {

    const [showSantaHat, setShowSantaHat] = useState(false)
   useEffect(()=>{
    if(picNumber === 3){
        setTimeout(()=> setShowSantaHat(true),1000)
    }
   })
    
    const DadPicChoice = () => {
        if(picNumber === 0 || picNumber > 3) return null;
        const picToShow = () => {
            if(picNumber === 1 ) return HappyDad;
            if(picNumber === 2 ) return UnimpressedDad;
            if(picNumber === 3) return GrumpyDad;

        }
        return (
            <div className='w-full h-full relative'>
            <img src={picToShow()} alt="happy dad pic" className='w-auto rounded-full flex-shrink h-52'/>
      {showSantaHat && <img src={SantaHat} className="w-auto animate-bounce  absolute -top-[5%] left-[18%] z-10 h-32 "/>}
       </div> )
    }
    const HappyMumPic = ()=> {
        if(picNumber === 0 || picNumber > 3) return null;
        const picToShow = () => {
            if(picNumber === 1 ) return FirstMum;
            if(picNumber === 2 ) return HappyMum;
            if(picNumber === 3) return GiddyMum;

        }
        return(
        <img src={picToShow()} alt="happy mum pic" className='w-auto rounded-full ml-8 flex-shrink h-52'/>
    )}
    return (
        <div className='flex py-6'>
                <DadPicChoice />
                <HappyMumPic /> 
               {picNumber === 4 && ( <img src={Cheers} alt="cheers!" className="w-auto flex-shrink h-52"/>
)}
        </div>
    )
};
export default ImageContainer;