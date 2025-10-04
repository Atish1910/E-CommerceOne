import React from 'react';

const NoFound = () => {
    return (
        <>
         <div className="no-data-container">
            <div className="no-data-card">
              <i className="bi bi-emoji-frown-fill no-data-icon"></i>
              <h3 className="no-data-title">Oops!</h3>
              <p className="no-data-text">
                No products found matching your search or category.
              </p>
            </div>
          </div>   
        </>
    );
};

export default NoFound;