import AOS from 'aos';
import 'aos/dist/aos.css';
import default_style from '../theme/App.module.css'
import project_style from '../theme/Project.module.css'

function ProjectPage() {
    AOS.init()

    return (
        <div className={default_style.content}>
            <div className={project_style.project_introducing}
                data-aos="fade-up" 
                data-aos-offset="200" 
                data-aos-delay="50" 
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
            >
                <h1 className={project_style.title}>Dự án của tôi</h1>
                <div className={project_style.title_bottom}></div>

                <div className={project_style.flex_center}>
                    <div className={project_style.project_card}>
                        <img src="/React-My-Info/images/projects/roblox_shop.png" alt="Roblox Shop" />

                        <div className={project_style.project_card_body}>
                            <h2 className={project_style.project_card_title}>Shop Roblox</h2>
                            <p className={project_style.project_card_version}><strong>Phiên bản : </strong> 0.5</p>

                            <a href='https://store.tokovn.com/' rel='noreferrer' target={'_blank'} className={project_style.project_card_button}>Demo</a>
                        </div>
                    </div>

                    <div className={project_style.project_card}>
                        <img src="/React-My-Info/images/projects/info.png" alt="My Info" />

                        <div className={project_style.project_card_body}>
                            <h2 className={project_style.project_card_title}>My Info</h2>
                            <p className={project_style.project_card_version}><strong>Phiên bản : </strong> 1.0</p>

                            <a href='https://tokovn.com/demo/info_v1/' rel='noreferrer' target={'_blank'} className={project_style.project_card_button}>Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage