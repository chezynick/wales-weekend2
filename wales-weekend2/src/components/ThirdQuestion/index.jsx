/* eslint-disable react/prop-types */
import { useState } from "react";


const FirstQuestion = ({onClick}) => {
    const [checkBoxTicked, setCheckBoxTicked] = useState(false)
    const handleChange = () => {
        setCheckBoxTicked(true)
        setTimeout(()=>onClick(),[3000])
    }
    return (
    <div className="flex text-white text-3xl justify-center space-x-6 items-center">
    <div>...with us? </div> <input className="w-8 h-8" type="checkbox" checked={checkBoxTicked} onChange={handleChange}/>
     </div>);
};
export default FirstQuestion;