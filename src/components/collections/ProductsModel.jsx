import React from 'react';
import ReactDOM from "react-dom";


const ProductsModel = ({isOpen, onClose}) => {
    if(!isOpen) return null;

    return ReactDOM.createPortal (
        <>
        <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-body">
                    model Open
                     <p>This modal is rendered outside the root div using React Portal!</p>
                </div>
                <div className="modal-footer">
                    <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={onClose}
                    >
                    Close
                    </button>
                </div>
                </div>
            </div>
        </div>
        </>,
        document.getElementById("portal-root")
    )

};

export default ProductsModel;