import xsLogo from '../assets/img/xs-logo-white.png';
import igIcon from "../assets/svg/instagram.svg";
import ldIcon from "../assets/svg/linkedin-in.svg";
import ghIcon from "../assets/svg/github.svg";

export default function Header() {
  return (
    <div className='header'>
        <img className='logo'src={xsLogo} alt="" />
        <nav>
            <a href="https://www.instagram.com/nachoxs_/"><img className="nav-items" src={igIcon} /></a>
            <a href="https://www.linkedin.com/in/ignacio-joaqu%C3%ADn-pantoja-280a3322a/"><img className="nav-items" src={ldIcon} /></a>
            <a href="https://github.com/NachoXS15"><img className="nav-items" src={ghIcon}/></a>
        </nav>
    </div>
  )
}
