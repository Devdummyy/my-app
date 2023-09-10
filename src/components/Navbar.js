import facebooks from "../assets/icons/facebook.png";
import instagrams from "../assets/icons/instagram.png";
import Soundcloud  from "../assets/icons/soundcloud.png";
import iron from "../assets/icons/marvel.png"
const Navbar = () => {
        return(
            
                <div className="flex justify-between items-center">
                <img src={iron} alt =" loves" width={50}/>
                <ul className="flex">
                    <li className="px-2">
                        <a href="https://soundcloud.com/user-980268968" target="1">
                           <img src={Soundcloud} alt =" SoundCloud" width={50}/>
                        </a>
                    </li>
                    <li  className="px-2">
                        <a href="https://soundcloud.com/user-980268968" target="2">
                           <img src={instagrams} alt =" SoundCloud" width={50}/>
                        </a>
                    </li> 
                    <li  className="px-2">
                        <a href="https://soundcloud.com/user-980268968" target="3">
                           <img src={facebooks} alt =" SoundCloud" width={50}/>
                        </a>
                    </li>
                </ul>
                </div>
        )
}

export default Navbar;