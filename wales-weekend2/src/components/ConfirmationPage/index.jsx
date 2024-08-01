import HappyDad from '../../images/happyDad.png'
import HappyMum from '../../images/happyMum.png'

const ConfirmationPage = () => {
    return (
        <div className="flex flex-col items-center justify-start w-screen h-screen">
            <h1 className="my-8 text-3xl text-white">It's time to pack those bags (prob just the 1 bag...small boot on these Fiestas)</h1>
            <div>Pick up will be between 9 and 9.30am - hangover permitting</div>
            <div className="mb-6">You will be driven to deepest darkest Wales</div>
            <div className="w-2/3 h-2 mb-6 bg-green-900" />
            <div>Staying in your home away from home at the Memorial Building in your own 2 bed apartment</div>
            <a className="underline text-blue-950" rel="noopener noreferrer" target="_blank" href="https://www.memorialbuildingapartments.co.uk/" >Click here to view</a>
            <div className="my-4 text-xl text-red-500 animate-pulse">Smoking sets off the smoke alarms so outside only!! (I dont want to lose my deposit/your paying any fines!)</div>
            <div>All the delights that Ruthin has to offer will be at your disposal as well as the poss foodie options...</div>
            <a className="underline text-blue-950" rel="noopener noreferrer" target="_blank" href="https://www.jdwetherspoon.com/pubs/the-castle-hotel-ruthin" >....spoons</a>
            <a className="underline text-blue-950" rel="noopener noreferrer" target="_blank" href="https://www.small-plates.co.uk/" >small plates place</a>
            <div className="mt-6">Then pack your sunn cream for a day at the beach?</div>
            <div className='flex items-center justify-around mt-6'>        
                <img src={HappyDad} alt="happy dad pic" className='flex-shrink w-auto ml-8 rounded-full h-52' />
                <img src={HappyMum} alt="happy mum pic" className='flex-shrink w-auto ml-8 rounded-full h-52' />
            </div>
        </div>
    );
}

export default ConfirmationPage;