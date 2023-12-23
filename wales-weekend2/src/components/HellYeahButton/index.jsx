import useSound from "use-sound";
import HoHoHo from '../../assets/hoHoHo.mp3'

// eslint-disable-next-line react/prop-types
const HellYeahButton = ({onClick}) => {
    const handleChange = () => {
        play()
        setTimeout(()=>onClick(),[2000])
    }
    const [play] = useSound(HoHoHo);
    return (
        <button onClick={handleChange} className="flex justify-center items-center px-4 py-1 bg-red-800 text-yellow-400">Hell Yeah</button>
    )
}
export default HellYeahButton