
import Devs from "../assets/icons/dev.png";
import { useNavigate } from 'react-router-dom';


function LandingPage(){
    const navigate = useNavigate();
    const handle = () => {
        navigate("/detail");
    }
    return(
        <div className="text-center font-mono h-14 bg-gradient-to-r from-sky-500 to-green-500 h-screen">
              <p className="text-2xl font-bold uppercase text-white ">About me</p>
              <div className="flex justify-center">
                <img src={Devs} alt = "Dev" className=""/>
              </div>
              <p className="text-md mt-2 font-bold text-white hover:text-black-600">You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example </p>
              <button className="text-xl text-[#ffffff] underline " onClick={handle}>Click here!</button>
         </div>
         
    );
    
}
export default LandingPage;