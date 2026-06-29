import { useState } from "react";

import Logo from "./Logo";

import NavItem from "./NavItem";

import "./Navbar.css";

export default function Navbar() {

    const [active,setActive]=useState("home");

    const menus=[

        {
            id:"home",
            title:"Home"
        },

        {
            id:"products",
            title:"Products"
        },

        {
            id:"compare",
            title:"Compare"
        },

        {
            id:"about",
            title:"About"
        },

        {
            id:"calculator",
            title:"Calculator"
        },

        {
            id:"contact",
            title:"Contact"
        }

    ];

    return(

<nav className="navbar navbar-expand-lg bg-white sticky-top">

<div className="container">

<Logo/>

<button
className="navbar-toggler"
data-bs-toggle="collapse"
data-bs-target="#navbar">

<span className="navbar-toggler-icon"></span>

</button>

<div
className="collapse navbar-collapse"
id="navbar">

<ul className="navbar-nav ms-auto">

{

menus.map(menu=>(

<NavItem

key={menu.id}

href={`#${menu.id}`}

title={menu.title}

active={active===menu.id}

onClick={()=>setActive(menu.id)}

/>

))

}

</ul>

<a

href="#contact"

className="btn btn-brand ms-lg-3"

>

Get Quote

</a>

</div>

</div>

</nav>

    )

}