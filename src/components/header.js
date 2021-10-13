import React from "react";
import imagePath from "../imgs/Pokemon_logo.svg";

export default function Header(){
    return(
        <div>
            <img src={imagePath} alt="logo" />
            <button>login</button>
        </div>
    )
}