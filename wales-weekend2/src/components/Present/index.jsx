// eslint-disable-next-line react/prop-types
const Present = ({ onClick })=>{
return (
    <div className="w-screen flex h-72 justify-center py-4 ">
      <button type="button"  onClick={onClick} className="flex justify-center items-center">
      <div className="text-3xl pt-8 text-yellow-500">Click me!!</div>
      <div className="relative w-[250px] h-[250px]">
    <div className="absolute z-0 top-[75px] left-12 bg-white w-40 h-40"/>
      <div className="z-10 absolute top-0 left-0">
    <svg   fill="#8e1e1e" height="250px" width="250px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.628 464.628" >
  <path d="m394.33,105.596h-76.136c22.944-22.372 37.216-53.596 37.216-88.096 0-9.665-7.835-17.5-17.5-17.5-44.786,0-84.057,24.045-105.596,59.9-21.539-35.855-60.81-59.9-105.595-59.9-9.665,0-17.5,7.835-17.5,17.5 0,34.5 14.273,65.724 37.216,88.096h-76.137c-9.665,0-17.5,7.835-17.5,17.5v324.033c0,9.665 7.835,17.5 17.5,17.5h324.032c9.665,0 17.5-7.835 17.5-17.5v-324.033c0-9.665-7.835-17.5-17.5-17.5zm-17.5,162.016h-127.016v-127.016h127.016v127.016zm-58.646-230.385c-7.525,32.765-33.378,58.618-66.144,66.143 7.526-32.766 33.379-58.619 66.144-66.143zm-105.596,66.142c-32.765-7.525-58.618-33.378-66.143-66.143 32.765,7.525 58.618,33.378 66.143,66.143zm2.226,37.227v127.016h-127.016v-127.016h127.016zm-127.016,162.016h127.016v127.017h-127.016v-127.017zm162.016,127.016v-127.016h127.016v127.017h-127.016z"/>
</svg></div>
</div></button>
    </div>
);
};
export default Present;