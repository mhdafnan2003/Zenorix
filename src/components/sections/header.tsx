import { useEffect, useState } from "react"
import { menuList } from "@utils/fackData/menuList"
import { Link } from 'react-scroll';

const Header = () => {
    const [isFixed, setIsFixed] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const windowPos = window.scrollY;
            if (windowPos >= 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }

        document.addEventListener('scroll', handleScroll)

        return () => document.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className={`main-header ${isFixed ? "fixed-header" : ""}`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center">
                        <div className="logo-outer">
                            <div className="logo">
                                <a href="#">
                                    <img src="/images/logos/logo.png" alt="Logo" title="Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="nav-outer clearfix">
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo">
                                        <a href="#">
                                            <img src="/images/logos/logo.png" alt="Logo" title="Logo" /></a>
                                    </div>
                                    <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <div className="navbar-collapse collapse">
                                    <ul className="navigation clearfix onepage">
                                        {
                                            menuList.map(({ id, label, path }) =>
                                                <li key={id}>
                                                    <Link className="nav-link-click" smooth={true} to={`${path}`}>{label}</Link>
                                                </li>)
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header