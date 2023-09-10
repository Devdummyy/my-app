
import Devs from "../assets/icons/dev.png";
import { useNavigate } from 'react-router-dom';


function LandingPage(){
    const navigate = useNavigate();
    const handle = () => {
        navigate("/detail");
    }
    return(
        <div className="text-center font-mono">
              <p className="text-2xl font-bold uppercase">About me</p>
              <div className="flex justify-center">
                <img src={Devs} alt = "Dev" className=""/>
              </div>
              <p className="text-md mt-2 font-bold hover:text-green-600">You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example </p>
              <button className="text-xl text-[#000000] underline " onClick={handle}>next</button>
         </div>
         
    );
    
}
export default LandingPage;