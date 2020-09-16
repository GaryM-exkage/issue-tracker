/* eslint-disable no-unused-vars */
import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/SearchIcon.svg";

/* eslint-enable no-unused-vars */

function SearchBar()
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
        <div className={`flex bg-gray-400 border-b border-gray-100 px-2 py-1 rounded shadow-inner ${ isFocused && "border-teal-300" } `}>
            <div className={`flex-shrink-0  mr-2 w-6 h-6 ${ isFocused ? "text-teal-500" : "text-teal-600" } `}>
                <SearchIcon className="w-6 h-6"/>
            </div>
            <input onFocus={doFocus} onBlur={unFocus} className="bg-transparent overflow-hidden outline-none w-full appearance-none placeholder-teal-800 text-gray-800 leading-tight" type="text" placeHolder="Search"></input>
        </div>);
}

export default SearchBar;