/* eslint-disable react/prop-types */
import HappyDad from '../../images/happyDad.png'
import HappyMum from '../../images/happyMum.png'
import UnimpressedDad from '../../images/unimpressed.png'

const ImageContainer = ({picNumber}) => {
    return (
        <div className='flex'>
                <img src={HappyDad} alt="happy dad pic" className={`${picNumber === 1 ? 'opacity-100 w-52' : 'opacity-0 w-0'} transition-all delay-300 flex-shrink h-52`}/>
                <img src={UnimpressedDad} alt="unimpressed" className={`${picNumber === 2 ? 'opacity-100 w-52' : 'opacity-0 w-0'} transition-all delay-300 flex-shrink h-52`}/>
                <img src={HappyMum} alt="happy mum pic" className={`${picNumber === 3 ? 'opacity-100 w-52' : 'opacity-0 w-0'} transition-all delay-300 flex-shrink h-52`}/>
        </div>
    )
};
export default ImageContainer;