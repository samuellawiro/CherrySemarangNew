import logoCherry from '../assets/logo/CherryLogoNew.png';
import './Navbar.css'
export default function Navbar() {
  return (
    <div className = "navbarWrapper">
        <img src={logoCherry}></img>
        <h1>With Cherry With Love</h1>
        <ul>
          <li>About</li>
          <li>Models</li>
          <li>Contact</li>
        </ul>
    </div>
  )
}
