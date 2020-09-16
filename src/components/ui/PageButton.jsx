/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */

function PageButton(props)
{
    return(
        <div className={`px-2 py-1 justify-items-center text-lg tracking-tight font-medium rounded hover:text-white  ${ props.active ? "bg-teal-500 text-white font-semibold" : "hover:bg-teal-400 hover:text-shadow-sm cursor-pointer" }`}>
            <div className="">
                {props.number}
            </div>
        </div>
    );
}

export default PageButton;