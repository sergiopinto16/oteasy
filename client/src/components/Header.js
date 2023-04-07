import { Link } from "react-router-dom";

import Navbar from './NavBar';
import './style/Header.css'


export default function Header() {
  return (
    <header>
      <div className="header-color">
        <div className="header-content">
          <Link to="/" className="logo">OTeasy</Link>
          <div className="header-nav">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}





