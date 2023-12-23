/* eslint-disable react/prop-types */

import HellYeahButton from "../HellYeahButton";


const FirstQuestion = ({onClick}) => {
   
    return (
    <div className="flex text-white text-3xl justify-center space-x-6 items-center">
    <div>How do you fancy a weekend away? </div> 
    <HellYeahButton onClick={onClick}/>
     </div>);
};
export default FirstQuestion;