/* eslint-disable react/prop-types */
import HappyDad from '../../images/happyDad.png'
import HappyMum from '../../images/happyMum.png'
import UnimpressedDad from '../../images/unimpressed.png'
import Cheers from '../../images/cheers.png'
import GrumpyDad from '../../images/grumpyDad.png'


const ImageContainer = ({picNumber}) => {
  
    const DadPicChoice = () => {
        if(picNumber === 0 || picNumber > 3) return null;
        const picToShow = () => {
            if(picNumber === 1 ) return HappyDad;
            if(picNumber === 2 ) return UnimpressedDad;
            if(picNumber === 3) return GrumpyDad;

        }
        return (
            <img src={picToShow()} alt="happy dad pic" className='w-full  flex-shrink h-52'/>
        )
    }
    const HappyMumPic = ({show})=> {
        if(!show) return null;
        return(
        <img src={HappyMum} alt="happy mum pic" className='w-full ml-4 flex-shrink h-52'/>
    )}
    return (
        <div className='flex py-6'>
                <DadPicChoice />
                <HappyMumPic show={picNumber !== 4 && picNumber !== 0}/> 
                <img src={Cheers} alt="cheers!" className={`${picNumber === 4 ? 'opacity-100 w-full' : 'opacity-0 w-0'} transition-all delay-300 flex-shrink h-52`}/>

        </div>
    )
};
export default ImageContainer;