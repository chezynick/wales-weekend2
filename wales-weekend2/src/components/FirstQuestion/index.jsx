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
    <div>How do you fancy a weekend away? </div> <input className="w-8 h-8" type="checkbox" checked={checkBoxTicked} onChange={handleChange}/>
    <div className={`${checkBoxTicked ? 'opacity-100 ' : ' opacity-0'} transition-opacity delay-500`}>Image here</div>
     </div>);
};
export default FirstQuestion;