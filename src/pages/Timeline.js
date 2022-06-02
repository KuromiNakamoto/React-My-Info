import AOS from 'aos';
import 'aos/dist/aos.css';
import default_style from '../theme/App.module.css'
import timeline_style from '../theme/Timeline.module.css'

function TimelinePage() {
    AOS.init();

    return (
        <div className={default_style.content}>
            <div className={timeline_style.timeline_introducing}
                data-aos="fade-up" 
                data-aos-offset="200" 
                data-aos-delay="50" 
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
            >
                <h1 className={timeline_style.title}>Dòng thời gian</h1>
                <div className={timeline_style.title_bottom}></div>

                <div className={timeline_style.timeline_div}>
                    <h2 className={timeline_style.t_title}>Dòng thời gian và sự kiện :</h2>

                    <p className={timeline_style.t_time}>
                        - <strong>2020</strong> : Mọi chuyện bắt đầu từ năm này... Một thời trẻ trâu chưa trải sự đời :). Luôn muốn được tạo ra một server Minecraft của
                        riêng mình và kết cục là bị bọn khác phá :(. Thường xuyên đi sỉ nhục và lăng mạ các server khác, khinh thường thành quả người khác đạt được :)
                    </p>

                    <p className={timeline_style.t_time}>
                        - <strong>Đầu 2021</strong> : Bắt đầu biết về plugin Minecraft, mỗi ngày đều lên mạng tìm kiếm về cách sử dụng
                        và config chúng. Đồng thời tôi biết luôn về khái niệm ngôn ngữ lập trình và cái tôi muốn học đầu tiên là Java
                        chứ không phải web như bây giờ.
                    </p>

                    <p className={timeline_style.t_time}>
                        - <strong>Cuối 2021</strong> : Từ bỏ làm server Minecraft do quá chán và cũng một phần là do tôi đã bước sang
                        tuổi dậy thì. Lúc này tôi đã tìm được một thứ thú vị mới :D, đó là website. Từ đó tôi đã biết khái niệm về mảng
                        Frontend và Backend, đồng thời cũng biết được giao thức kết nối từ Client đến Server như thế nào, Hosting và 
                        Domain là gì nhờ kiến thức nhập môn của F8. Tôi đã tìm hiểu qua các ngôn ngữ : HTML, CSS, JavaScript và rồi lấn 
                        sang mảng Backend bằng ngôn ngữ PHP. Lúc này tôi đã có thể làm một website MPA hoàn chỉnh.
                    </p>

                    <p className={timeline_style.t_time}>
                        - <strong>Đầu 2022 - nay</strong> : Nhận thấy việc kiến thức mình học chưa đủ nên tôi đã tìm hiểu về NodeJS và các thư viện
                        của JavaScript. Đồng thời tôi cũng biết được web SPA là gì và các ông lớn như Google, Facebook, "Tóp Tóp" sử dụng chúng như
                        thế nào. Hiện tại tôi đang học khóa React tại F8 mà sẽ sớm hoàn thành nó vào cuối tháng 6 năm nay. Tôi cũng đã dự định trở
                        lại với Java và học thêm một ngôn ngữ mới là Python.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TimelinePage