/* eslint-disable react/prop-types */
const Success = ({showSuccess}) => {
return (
    <div className={`${showSuccess? 'w-full opacity-100' : 'w-0 h-0 opacity-0'} transition-all  text-xl font-serif flex flex-col items-center justify-center delay-200`}>
        <p>Pick a weekend, we will book a night or 2 in a 3 bed accommodation close to Ruthin, you will be chaffeur driven in a vintage ford fiesta.</p>
        <p>We can visit any locals you may know in the area, explore the glorious food and drink that wales has to offer (spoons? - other venues are available).</p>
        <p>Day 2 - beach / mock italian village / chippy the choice is yours!</p>
        <p className="pt-4">Once booked, itinerary updates will appear here</p>
    </div>
)
};
export default Success;