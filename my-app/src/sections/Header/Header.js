import './Header.css'
import NavIte , {NavIteDropDown} from '../../components/NavIte/NavIte'
import { Link } from 'react-router-dom'
import {SearchBox} from '../..//components/index'
const Header = () => {
  return (

    <div className="navbar navbar-expand-md  navbar-dark cyborg-navbar ">
    <div className="container">
        <a href="/" className="navbar-brand" style={{'color':'var(--color-dark)'}}>Souqol</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
      <NavIte>
          <Link to="/"  className="nav-link">الصفحة الرئيسية</Link>
           </NavIte>
  <NavIte>
           <Link to="/#" className="nav-link">المفضلات </Link> </NavIte>

             <NavIteDropDown>
                    <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">التفاصيل</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/#" className="dropdown-item">الفئات</Link></li>
                        <li><Link to="/#" className="dropdown-item">الفلترة</Link></li>
                    </ul>
                    </NavIteDropDown>
                <NavIte> <Link to="/#" className="nav-link">الاشعارات</Link></NavIte>
                <NavIte>
                <Link to="/profile" className="nav-link">الصفحة الشخصية</Link>
                </NavIte>
                <NavIte>
          <SearchBox></SearchBox>
                </NavIte>
            </ul>
          
        </div>
    </div>
</div>
  )
}

export default Header
