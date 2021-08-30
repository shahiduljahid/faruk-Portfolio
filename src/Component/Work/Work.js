import React from 'react';
import './Work.css'

const Work = ({work}) => {
    return (
        <div className="col-md-3 WorkContent mx-1 mb-5 rounded shadow px-4 py-5">

            <div className="d-flex mb-2">

                <img style={{height:'100px'}} src={work.img} alt="workImg" className="img-fluid" />
                <h4 className="ms-2 d-flex align-items-center">{work.title}</h4>

            </div>
            <p className="mt-1">{work.des1}</p>
            <p className="mt-1">{work.des2}</p>
            <p className="mt-1">{work.des3}</p>


            
        </div>
    );
};

export default Work;
