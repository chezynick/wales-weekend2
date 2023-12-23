/* eslint-disable react/prop-types */
import HellYeahButton from "../HellYeahButton";
import NickPic from '../../images/nick.png'
import AnnePic from '../../images/anne.png'

const FirstQuestion = ({onClick}) => {
    return (
        <div className="w-full flex flex-col">
    <div className="flex text-white text-3xl justify-center  items-center">
    <div>...with us? </div>
    <HellYeahButton onClick={onClick}/>
     </div>
     <div className="flex pt-20 items-center w-full  space-x-8 justify-center">
        <img src={NickPic} alt="nick" className=" rounded-full mr-32 w-32 h-32 animate-spin"/>
        <img src={AnnePic} alt="anne" className=" rounded-full ml-32 w-32 h-32 animate-spin"/>
     </div>
     </div>);
};
export default FirstQuestion;