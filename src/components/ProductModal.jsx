import React from 'react';

const ProductModal = ({selectedProduct}) => {
    return (
        <>
            <div
        className="modal fade"
        id="productModal"
        tabIndex="-1"
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-blue" id="productModalLabel">
                {selectedProduct ? selectedProduct.title : "Product Details"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {selectedProduct ? (
                <div className="row ">
                  <div className="col-lg-6">
                    <img
                      src={
                        selectedProduct.category?.image 
                      }
                      alt={selectedProduct.title}
                      className="w-100 rounded mb-3"
                    />
                  </div>
                  <div className="col-lg-6">
                    {/* <h5 className="fw-bold">{selectedProduct.title}</h5> */}
                    <p className="text-muted">{selectedProduct.description}</p>
                    <h6 className="mt-3 text-rose ">
                      Rs. {selectedProduct.price}.00
                    </h6>
                  </div>
                </div>
              ) : (
                <p>No product selected</p>
              )}
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default ProductModal;