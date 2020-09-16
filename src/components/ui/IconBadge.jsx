/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */

function IconBadge(props)
{
    return (
        <div className="flex flex-shrink-0 cursor-default h-auto text-xs place-items-center bg-gray-400 p-px pr-2 mr-1 mt-1 rounded-full space-x-1">
            <span className="flex-shrink-0 w-6 h-6">{props.icon}</span>
            <span className={`text-teal-900 ${props.semibold && "font-semibold"} ${props.bold && "font-bold"}`}>{props.text}</span>
        </div>);
}

export default IconBadge;