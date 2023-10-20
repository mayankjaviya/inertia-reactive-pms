import React from "react";
import Navbar from "./Navbar";

export default function Layout({children}) {
        return (
            <div className="">
                <Navbar/>
            <div className="main-content mt-5">{children}</div>
            </div>
        )
}
