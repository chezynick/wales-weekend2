/* eslint-disable react/prop-types */
import HappyDad from '../../images/happyDad.png'
import UnimpressedDad from '../../images/unimpressed.png'

const ImageContainer = ({picNumber}) => {
    return (
        <div>
                <img src={HappyDad} alt="happy dad pic" className={`${picNumber === 1 ? 'opacity-100 w-52' : 'opacity-0 w-0'} transition-all delay-300 flex-shrink h-52`}/>
            {picNumber === 2 && (
<img src={UnimpressedDad} alt="happy dad pic" className="w-32 flex-shrink h-32"/>

            )

            }
        </div>
    )
};
export default ImageContainer;