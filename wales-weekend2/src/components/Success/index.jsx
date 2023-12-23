/* eslint-disable react/prop-types */
const Success = ({showSuccess}) => {
    if(!showSuccess) return null
return (
    <div className='w-full opacity-100 px-12 text-2xl font-serif flex flex-col items-center justify-center '>
        <p>Pick a weekend and we will book accommodation close to Ruthin, you will be chaffeur driven in a vintage ford fiesta.</p>
        <p>We can visit any locals you may know in the area, explore the glorious food and drink that wales has to offer (spoons? - other venues are available).</p>
        <ul>
            <li>Day 1 - visit family</li>
            <li>Day 2 - beach, mountains or chippy the choice is yours!</li>
        </ul>
       
        <p className="pt-4">Once booked, itinerary updates will appear here</p>
        <small className="mt-20 text-lg" >* disclaimer: package includes transportation there AND back plus accommodation, no responsibility for the British weather, refunds will not be given.</small>
    </div>
)
};
export default Success;