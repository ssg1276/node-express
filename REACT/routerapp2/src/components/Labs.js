import React from "react";
import { useNavigate } from "react-router-dom";


function Labs() {

    const navigate = useNavigate()
    function clickHandler() {

        navigate("/support");
    }
    function backHandler() {
        navigate(-1)
    }
    return (<div>
        <div>
            labs
        </div>
        <button onClick={clickHandler}>GO to support page</button>
        <button onClick={backHandler}>BAck</button>
    </div>

    )

}

export default Labs;