import AOS from 'aos';
import 'aos/dist/aos.css';
import default_style from '../theme/App.module.css'
import favorite_style from '../theme/Favorite.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faTv, faMusic } from '@fortawesome/free-solid-svg-icons'

function FavoritePage() {
    AOS.init()

    return (
        <div className={default_style.content}>
            <div className={favorite_style.favorite_introducing}
                data-aos="fade-up" 
                data-aos-offset="200" 
                data-aos-delay="50" 
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
            >
                <h1 className={favorite_style.title}>Sở thích</h1>
                <div className={favorite_style.title_bottom}></div>

                <div className={favorite_style.flex_center}>
                    <div className={favorite_style.favorite_content}>
                        <div className={favorite_style.favorite_card}>
                            <div className={favorite_style.favorite_card_icon}>
                                <FontAwesomeIcon icon={faGamepad} />
                            </div>
                        </div>

                        <h2 className={favorite_style.c_title}>Chơi Game</h2>

                        <p className={favorite_style.c_text}>
                            Ngoài Minecraft ra thì mình chả chơi gì cả :)
                        </p>
                    </div>

                    <div className={favorite_style.favorite_content}>
                        <div className={favorite_style.favorite_card}>
                            <div className={favorite_style.favorite_card_icon}>
                                <FontAwesomeIcon icon={faTv} />
                            </div>
                        </div>

                        <h2 className={favorite_style.c_title}>Xem Phim</h2>

                        <p className={favorite_style.c_text}>
                            Mình hay xem Anime với nhiều thể loại khác nhau. 
                            Chủ yếu mình thích thể loại Isekai.
                        </p>
                    </div>

                    <div className={favorite_style.favorite_content}>
                        <div className={favorite_style.favorite_card}>
                            <div className={favorite_style.favorite_card_icon}>
                                <FontAwesomeIcon icon={faMusic} />
                            </div>
                        </div>

                        <h2 className={favorite_style.c_title}>Nghe Nhạc</h2>

                        <p className={favorite_style.c_text}>
                            Mình thích nghe nhạc Nhật và nhạc EDM (Nhất là của TheFatRat).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoritePage