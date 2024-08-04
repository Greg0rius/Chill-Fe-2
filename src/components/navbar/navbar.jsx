import iconA from "../../assets/account.svg"
import iconStar from "../../assets/star.svg"
import iconExit from "../../assets/exit.svg"
import profile from "../../assets/Ellipse.svg"
import keyboarArrowDown from "../../assets/KeyboardArrowDown.svg"
import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="frame-70">
        <div className="container-logo">
            <img src="Logo.svg" alt="" className="logo-1"/>
            <img src="movieopen.svg" alt="" className="movie-open"/>
        </div>
        <ul className="blog">
          <li>Series</li>
          <li>Film</li>
          <li>Daftar Saya</li>
        </ul>
      </div>
      <div className="avatar">
        <div className="container-ellipse">
        <div className="ellipse"><img src={profile} alt="" /></div>
        <div className="keyboard-arrow-down"> <img src={keyboarArrowDown} alt="" /></div>
        </div>
        <div className="dropdown">
          <ul className="dropdown-list">
            <li className="profil"><img src={iconA} alt="account" className="account"/> Profil Saya </li>
            <li><img src={iconStar} alt="star" className="dr-star" /> Ubah Premium</li>
            <a href="/login"><li><img src={iconExit} alt="exit" className="exit" />  Keluar</li></a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
