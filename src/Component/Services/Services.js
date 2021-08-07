import React from 'react';

const Services = ({service}) => {
    return (
        <div className="col-md-3 mb-5 text-center">

            <img style={{height:'100px'}} src={service.img} alt="service" className="img-fluid" />
            <h4 className=" mt-3 text-bold">{service.des}</h4>
            <p className=" mt-2">{service.count}</p>

            
        </div>
    );
};

export default Services;
