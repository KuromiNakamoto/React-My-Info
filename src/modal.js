import default_style from './theme/App.module.css'

function CreateModal(params) {
    return (
        <div className={default_style.modal} id={params.id} toggle={params.toggle}>
            <div className={default_style.modal_content}>
                <div className={default_style.modal_header}>
                    <h2 className={default_style.modal_title}>{params.modalHeaderTitle}</h2>

                    <button className={default_style.modal_close} onClick={params.clickclose}>&times;</button>
                </div>
                <div className={default_style.modal_body}>
                    {params.modalBodyContent}
                </div>
            </div>
        </div>
    )
}

export default CreateModal;