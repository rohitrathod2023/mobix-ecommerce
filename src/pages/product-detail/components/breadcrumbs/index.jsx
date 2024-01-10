import React from "react";
import "./breadcrumbs.css"
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadCrumbs = props =>{

  const {productDetail = {} } = props;
  const {brand= "", name = "",} = productDetail;


    return (
        <Breadcrumb>
          <Breadcrumb.Item  href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item  href="#/">{brand}</Breadcrumb.Item>
          <Breadcrumb.Item  href="#/">Mobile Phone</Breadcrumb.Item>
          <Breadcrumb.Item  active>{name}</Breadcrumb.Item>
        </Breadcrumb>
      );
};

export default BreadCrumbs;