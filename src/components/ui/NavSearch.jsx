/* eslint-disable no-unused-vars */
import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/SearchIcon.svg";

/* eslint-enable no-unused-vars */

function NavSearchBar()
{
    const [isFocused, setFocus] = React.useState(false);

    function doFocus()
    {
        setFocus(true);
    }

    function unFocus()
    {
        setFocus(false);
    }

    return (
        <div className={`flex bg-teal-700 border-b border-teal-300 px-2 py-1 rounded shadow-inner ${ isFocused && "border-teal-300" } `}>
            <div className={`flex-shrink-0  mr-2 w-6 h-6 ${ isFocused ? "text-teal-200" : "text-teal-400" } `}>
                <SearchIcon className="w-6 h-6"/>
            </div>
            <input onFocus={doFocus} onBlur={unFocus} className="bg-transparent overflow-hidden outline-none w-full appearance-none placeholder-teal-100 text-white leading-tight" type="text" placeholder="Find Projects"></input>
        </div>);
}

export default NavSearchBar;