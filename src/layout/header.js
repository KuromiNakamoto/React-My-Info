import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import default_style from '../theme/App.module.css'
import { useState } from 'react';

function HeaderComponent() {
    const [headerShow, setHeaderShow] = useState('hide')

    const ToggleHeaderRight = () => {
        if (headerShow === "show")
            setHeaderShow("hide")
        else if (headerShow === "hide")
            setHeaderShow("show")
    }

    return (
        <div className={default_style.header}>
            <div className={default_style.header_mobile}>
                <Link to={'/'} className={default_style.header_logo}>
                    <img src={logo} alt="Logo" /> 
                    <div className={default_style.header_logo_text}>React My Info</div>
                </Link>

                <div className={default_style.header_right_toggle}>
                    <div className={default_style.header_bars} onClick={ToggleHeaderRight} toggle={headerShow}></div>
                </div>
            </div>

            <div className={default_style.header_right_outside} toggle={headerShow}>
                <div className={default_style.header_right}>
                    <div className={default_style.justify_content_end}>
                        <button className={default_style.header_right_close} onClick={ToggleHeaderRight}>&times;</button>
                    </div>
                    <Link to='/' className={default_style.header_link}>Trang chủ</Link>
                    <Link to='/education' className={default_style.header_link}>Học vấn</Link>
                    <Link to='/timeline' className={default_style.header_link}>Dòng thời gian</Link>
                    <Link to='/favorite' className={default_style.header_link}>Sở thích</Link>
                    <Link to='/project' className={default_style.header_link}>Dự án</Link>
                </div>
            </div>
            
        </div>
    )
}

export default HeaderComponent;