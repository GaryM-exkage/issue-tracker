/* eslint-disable no-unused-vars */
import React from "react";
import { ReactComponent as ChevronDown } from "../../assets/icons/ChevronDown.svg";
/* eslint-enable no-unused-vars */

function Tab(props)
{
    return (
        <div>
            <button className="flex appearance-none outline-none px-2 rounded-t text-gray-800 py-px mr-1 hover:text-shadow-sm hover:text-white hover:bg-teal-400">
                {props.text}
                <ChevronDown className="self-end stroke-2 mb-px ml-1 h-4 w-4"/>
            </button>
        </div>
    );
}

export default Tab;