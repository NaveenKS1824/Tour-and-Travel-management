import React from "react";
import {Col} from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import ServiceCard from "./ServiceCard";

const servicesData =[
    {
        imgUrl:weatherImg,
        title:"Calcuted Weather",
        desc:'lorem ipsum dolor sit amet,',
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:'lorem ipsum dolor sit amet,',
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:'lorem ipsum dolor sit amet,',
    },

]

 const ServiceList = () =>{
    return (
       <>
        {
            servicesData.map((item,index)=>
            <Col lg='3' key ={index}><ServiceCard item={item}/></Col>)
        }
       </>
    )
 }
 export default ServiceList;