import React from "react";
import Navbar from "./Navbar";
import "../../css/app.css";

export default function Layout({children}) {
        return (
            <div className="main-container">
                <Navbar />
                <div className="main-content mt-5">{children}</div>
            </div>
        );
}
