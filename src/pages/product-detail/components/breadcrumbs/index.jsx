import React from "react";
import "./breadcrumbs.css"
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadCrumbs = () =>{
    return (
        <Breadcrumb>
          <Breadcrumb.Item  href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item  href="#/">iPhone</Breadcrumb.Item>
          <Breadcrumb.Item  href="#/">Mobile Phone</Breadcrumb.Item>
          <Breadcrumb.Item  active>iphone 14</Breadcrumb.Item>
        </Breadcrumb>
      );
};

export default BreadCrumbs;