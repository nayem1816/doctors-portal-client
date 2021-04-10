import React from 'react';
import fluoride from '../../../images/Fluoride.png'
import cavity from '../../../images/Cavity.png'
import teath from '../../../images/Teath.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const serviceData = [
        {
            name: 'Fluoride Treatment',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            img: cavity
        },
        {
            name: 'Teath Whitening',
            img: teath
        }
    ]
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="row w-75 mt-3">
                {
                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
                </div>
            </div>
        </section>
    );
};

export default Services;