import { Link } from 'react-router-dom'
import default_style from '../theme/App.module.css'

function ErrorPage() {
    return (
        <div className={default_style.content}>
            <h1 style={{'textAlign': 'center'}}>Trang bạn đang tìm không tồn tại</h1>
            <p style={{'textAlign': 'center', 'color': '#fff', 'fontSize': '20px', 'lineHeight': '55px'}}>Nếu bạn muốn trở lại trang chủ, hãy <Link to="/" style={{'color': '#ffffffa1', 'textDecoration': 'none'}}>nhấn vào đây</Link>.</p>
        </div>
    )
}

export default ErrorPage