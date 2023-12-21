/* eslint-disable react/prop-types */
const Success = ({showSuccess}) => {
return (
    <div className={`${showSuccess? 'w-full opacity-100' : 'w-0 opacity-0'} transition-all text-center delay-200`}>yay</div>
)
};
export default Success;