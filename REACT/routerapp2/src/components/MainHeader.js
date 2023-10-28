import React from "react";
import { Outlet } from "react-router-dom";


function MainHeader() {
    return (
        <div>
            <Outlet />

        </div>
    )

}

export default MainHeader;