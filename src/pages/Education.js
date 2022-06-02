import AOS from 'aos';
import 'aos/dist/aos.css';
import default_style from '../theme/App.module.css'
import education_style from '../theme/Education.module.css'

function EducationPage() {
    AOS.init();

    return (
        <div className={default_style.content}>
            <div className={education_style.education_introducing}
                data-aos="fade-up" 
                data-aos-offset="200" 
                data-aos-delay="50" 
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
            >
                <h1 className={education_style.title}>Học vấn</h1>
                <div className={education_style.title_bottom}></div>

                <div className={education_style.programming_language}>
                    <h2 className={education_style.p_title}>Ngôn ngữ lập trình và thư viện :</h2>

                    <div className={education_style.list_p_text}>
                        <p className={education_style.p_text}>
                            <strong>HTML (Hyper Text Markup Language)</strong> : 
                            Đây không phải là ngôn ngữ lập trình mà nó được gọi là ngôn ngữ đánh dấu siêu văn bản. Nó thường được dùng để làm phần khung cho website và là một phần rất quan trọng.
                        </p>

                        <p className={education_style.p_text}>
                            <strong>CSS (Cascading Style Sheets)</strong> : 
                            Là một ngôn ngữ giúp chúng ta thay đổi diện mạo của phần khung HTML để cho nó thẩm mỹ :D chút.
                        </p>

                            <p className={education_style.p_text}>
                                <strong>JS (JavaScript)</strong> : 
                                Là một ngôn ngữ lập trình kịch bản dành cho website. Trước đây nó thường được dùng cho frontend để tương tác DOM, nhưng sau khi có sự xuất hiện của các framework và thư viện thì nó đã hỗ trợ cả backend.
                            </p>
                        </div>

                        <div className={education_style.list_p_text}>
                            <p className={education_style.p_text}>
                                <strong>PHP (Hypertext Preprocessor)</strong> : 
                                Là ngôn ngữ lập trình kịch bản dành cho website theo hướng backend (máy chủ). Nó thường được dùng để giúp chúng ta tương tác giữa client và server.
                            </p>

                            <p className={education_style.p_text}>
                                <strong>NodeJS (JavaScript)</strong> : 
                                Là một JavaScript Runtime được build dựa trên engine JavaScript v8 của Chrome ra mắt vào năm 2009. Nó giúp JavaScript được mở rộng sang phía máy chủ (Backend).
                            </p>

                            <p className={education_style.p_text}>
                                <strong>React (JavaScript)</strong> : 
                                Là một thư viện của JavaScript được xây dựng và phát triển bởi Facebook cho phép các lập trình viên Frontend xây dựng giao diện người dùng một cách dễ dàng và chia Component để dễ quản lý.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default EducationPage