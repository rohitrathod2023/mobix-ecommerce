import React from "react";
import "./sort-by.css";
import Form from 'react-bootstrap/Form';

const SortBy = () =>{
    return(
        <div className="sort-by">
        <span className="sort-by-label">
            Sort by
        </span>
                <Form.Select size="sm">
                    <option value="price-High to low">
                    Price-High to low
                    </option>
                    <option value="price-low to high">
                    Populaarity
                    </option>
                    <option value="Populaarity">
                    Price-low to High
                    </option>
                    <option value="Rating">
                    Rating
                    </option>
          </Form.Select>
 
    </div>
    );
};

export default SortBy;