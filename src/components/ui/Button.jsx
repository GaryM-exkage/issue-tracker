/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */

function Button(props)
{
    const [isClicking, setClicking] = React.useState(false);

    function click()
    {
        setClicking(true);
    }

    function away()
    {
        setClicking(false);
    }

    const mainButton = "px-4 py-2 rounded";

    const buttonClass = props.disabled ?
        `${mainButton} font-semibold text-white bg-teal-500 opacity-50 cursor-not-allowed` :
        `${mainButton} text-white text-shadow-sm font-bold shadow-md ${ isClicking ? "bg-teal-700 shadow-inner" : "bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400"}`;

    return <div>
        <button onClick={props.onClick} onMouseDown={!props.disabled && click} onMouseUp={!props.disabled && away} onMouseLeave={!props.disabled && away}
            className={buttonClass}>{props.text}
        </button>
    </div>;
}

export default Button;