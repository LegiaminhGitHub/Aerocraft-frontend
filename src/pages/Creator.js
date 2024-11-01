
import React, { useEffect } from "react";
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Com_logo from "../images/OIG4.vG4omE6g-removebg-preview.png"
import Menu_logo from "../images/menu_2.png"
import "../displaypage.css"
import { useContext } from 'react';
import MyContext from '../MyContext';
import { airplane_comercial } from "../browser_cache/deatailed_aircraft_prod";
import minh_hien_img from "../images/le_gia_minh.jpg"
import gia_minh_img from "../images/legiaminh.png"

// console.log(sharedData)
function Creator_page(){
        const navigate = useNavigate()
        const go_back_search = () =>{
            navigate("/search")
        }   
        const { data, updateData } = useContext(MyContext)

      

    // Assuming "Bypass ratio" is a string

    


    return(
        <>
            <nav className="nav-bar">
                <div className="nav-bar-brand" onClick={() => go_back_search()}>
                    {/* <img id="menu-logo" src={Menu_logo}></img> */}
                    <img id="logo-image" src={Com_logo}></img>
                    <h2>SkylabHub</h2>
                </div>
            </nav>
            <div className="About-creator">
                <img src={gia_minh_img} className="creator_img"></img>
                <h1>Lê Gia Minh</h1>
                <h2>Linkedin profile : <a href="https://www.linkedin.com/in/le-gia-minh-1084532b6/">Le Gia Minh</a></h2>
                <h2>Contact info (personal email): legiaminhoffice@gmail.com</h2>

             
            </div>

    </>
    )
}

export default Creator_page;