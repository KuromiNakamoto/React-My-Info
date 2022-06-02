import default_style from '../theme/App.module.css'
import React, { useState } from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import $ from 'jquery';
import CreateModal from '../modal';

function HomePage() {
    const [ senderEmail, setSenderEmail ] = useState('')

    const [ subjectEmail, setSubjectEmail ] = useState('')

    const [ contentEmail, setContentEmail ] = useState('')

    const [ EmailModalToggle, setEmailModalToggle ] = useState('hide');

    const [ SuccessModalToggle, setSuccessModalToggle ] = useState('hide');

    const toggleEmailModal = () => {
        if (EmailModalToggle === "show") {
            setEmailModalToggle("hide")
        } else if (EmailModalToggle === "hide") {
            setEmailModalToggle("show")
        }
    }

    const toggleSuccessModal = () => {
        if (SuccessModalToggle === "show") {
            setSuccessModalToggle("hide")
        } else if (SuccessModalToggle === "hide") {
            setSuccessModalToggle("show")
        }

        setEmailModalToggle("hide")
    }

    const handleFeedback = (e) => {
        let default_text = $(e.target).html().trim()

        if (senderEmail !== '' && subjectEmail !== '' && contentEmail !== '') {
            let cuphap = "(%_sender_%) %_subject_% : %_content_%"

            cuphap = cuphap.replace('%_sender_%', senderEmail)
    
            cuphap = cuphap.replace('%_subject_%', subjectEmail)
    
            cuphap = cuphap.replace('%_content_%', contentEmail)
    
            $.ajax({
                type: "GET",
                url: "https://tokovn.com/api/sendme.php?message=" + cuphap,
                beforeSend: function () {
                    $(e.target).prop('disabled', !0).html("Vui lòng chờ...")
                },
                complete: function () {
                    $(e.target).prop('disabled', !1).html(default_text)
                },
                success: function () {
                    toggleSuccessModal()
    
                    setSenderEmail('')
    
                    setSubjectEmail('')
    
                    setContentEmail('')
                },
                error: function (error) {
                    console.log(error)
                }
            })
        }
    }

    return (
        <>
            <CreateModal 
            id="successModal"
            modalHeaderTitle={(
                <>
                    <span>Gửi Feedback</span> <span style={{'marginLeft': '0.25rem'}}><FontAwesomeIcon icon={faHeart} /></span>
                </>
            )}
            toggle={SuccessModalToggle}
            clickclose={() => toggleSuccessModal()}
            modalBodyContent={(
                <>
                    <p style={{'fontSize':'20px', 'color':'#fff'}}>Đã gửi thành công !</p>
                </>
            )}
            />

            <CreateModal 
            id="emailModal" 
            modalHeaderTitle={(
            <>
                <span>Gửi Feedback</span> <span style={{'marginLeft': '0.25rem'}}><FontAwesomeIcon icon={faHeart} /></span>
            </>
            )}
            toggle={EmailModalToggle} 
            clickclose={() => toggleEmailModal()}
            modalBodyContent={(
            <>
                <div className={clsx(default_style.form_group)}>
                    <label htmlFor='sender'>Tên người gửi :</label>
                    <input type={'text'} className={default_style.modal_input} id='sender' placeholder='Nhập tên người gửi...' onChange={e => setSenderEmail(e.target.value)} value={senderEmail} />
                </div>

                <div className={default_style.form_group}>
                    <label htmlFor='subject'>Tiêu đề :</label>
                    <input type={'text'} className={default_style.modal_input} id='subject' placeholder='Nhập tiêu đề...' onChange={e => setSubjectEmail(e.target.value)} value={subjectEmail} />
                </div>

                <div className={default_style.form_group}>
                    <label htmlFor='content'>Nội dung :</label>
                    <textarea type={'text'} className={default_style.modal_input} id='content' placeholder='Nhập nội dung...' onChange={e => setContentEmail(e.target.value)} value={contentEmail}></textarea>
                </div>

                <div className={default_style.form_group}>
                    <button className={default_style.modal_button} onClick={handleFeedback}>Gửi ngay <FontAwesomeIcon icon={faHeart} /></button>
                </div>
            </>
            )}
        />
        <div className={clsx(default_style.content, default_style.introducing_fade_01)}>
            <div className={default_style.introContent}>
            <div className={default_style.introducing_header_list}>
                <h1 className={default_style.introducing_header}>Giới thiệu về tôi</h1>
            </div>
            <div className={default_style.introducing_animation}></div>
            <div className={default_style.introducing_desc_list}>
                <h2 className={default_style.introducing_description}>Chào các cậu ! Mình là Đoàn Gia Bảo.</h2>
                <h2 className={default_style.introducing_description}>Mình hiện tại đang là một Học sinh cấp 2 kiêm Web Coder.</h2>
                <div className={default_style.introducing_button_list}>
                    <a href='https://www.fb.com/Nankaji.Minato' rel='noreferrer' target={'_blank'} className={default_style.introducing_button}><span style={{'marginRight': '0.25rem'}}><FontAwesomeIcon icon={faFacebook} /></span> Facebook</a>
                    <button onClick={toggleEmailModal} className={default_style.introducing_button}>Gửi feedback  <span style={{'marginLeft': '0.25rem'}}><FontAwesomeIcon icon={faHeart} /></span></button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default HomePage