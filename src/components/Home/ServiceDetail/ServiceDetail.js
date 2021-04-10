import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px'}} src={service.img} alt=""/>
            <h5 className="mt-4 text-secondary">{service.name}</h5>
            <p className="text-secondary mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint nobis labore illo? Est, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, modi.</p>
        </div>
    );
};

export default ServiceDetail;