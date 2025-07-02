const Modal = ({title="",image=""}) => {
    return (
        <div className="modal fade" id="previewModal" tabIndex="-1" aria-labelledby="previewModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content bg-transparent border-0">
                    <div className="modal-header border-0">
                        <h1 className="modal-title fs-5" id="previewModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={image} className="img-fluid rounded-4" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;