import React from "react";
import "./filters.css"
import Form from 'react-bootstrap/Form';


const BrandsOptions = [
    {
        name: "Samsung",
        count: "45",
    },
    {
        name: "iPhone",
        count: "45",
    },
    {
        name: "Oppo",
        count: "45",
    },
    {
        name: "Vivo",
        count: "45",
    },
    {
        name: "Mi",
        count: "50",
    },
    {
        name: "OnePlus",
        count: "30",
    },
]



const Filters = () =>{
    
    return(
        <div>
              <h3 className="filters-heading">filters </h3>
              <div className="filters-main">
                <div className="brands-filter">
                    <div className="brands-top">
                        <h5 className="filters-section-heading"> Brands</h5>
                        <a className="pink-link" href="#/"> View ALl</a>
                    </div>
                    <div className="brands-options">
                {BrandsOptions.map(brandoption =>{
                            return(
                                <div className="brands-option">
                                <div className="d-flex">
                                <input type="checkbox"/>
                                <span>{brandoption.name}</span>
                                </div>
                                <span>{brandoption.count}</span>
                            </div>
                           
                            )
                        })}
                    
                     
                       
                            <hr className="filter-sepration" />
                </div>
                </div>
                   <div className="price-filter">
                    <div className="price-top">
                        <h5 className="filters-section-heading"> Price</h5>
                    </div>
                    <div className="price-range">
                    <Form.Label className="custom-price-value">₹10,000- ₹1,00,000</Form.Label>
                    <Form.Range />
                    </div>

                </div>
              </div>
        </div>
    );
};

export default Filters; 