/* eslint-disable no-unused-vars */
import React from "react";
import PageButton from "./PageButton";
import { ReactComponent as ChevronDown } from "../../assets/icons/ChevronDown.svg";
import { ReactComponent as ChevronRight } from "../../assets/icons/ChevronRight.svg";
import { ReactComponent as ChevronLeft } from "../../assets/icons/ChevronLeft.svg";
/* eslint-enable no-unused-vars */

function IssueBlank()
{
    const background = "https://www.transparenttextures.com/patterns/cubes.png";
    return (
        <div className="flex flex-col  bg-gray-200  shadow-md rounded-b-lg flex-grow"
            style={{
                backgroundImage: `url(${background})`,
            }}>
            <div className="flex-grow"/>

            <div className="flex cursor-default p-3 space-x-5 text-gray-700 justify-center">

                <div className="flex space-x-1 sm:space-x-3 font-semibold text-lg">
                    <ChevronLeft className="flex-shrink-0 w-8 h-8 w-auto p-1 rounded hover:bg-teal-400 hover:text-white cursor-pointer self-center stroke-2"/>
                    <PageButton number="1" />
                    <div className="pr-1">...</div>
                    {/* <PageButton number="2,345"/> */}
                    <PageButton number="2,346" active={true}/>
                    <div className="pl-1">...</div>
                    <PageButton number="3,000"/>
                    <ChevronRight className="flex-shrink-0 p-1 cursor-pointer rounded hover:bg-teal-400 hover:text-white w-auto w-8 h-8 self-center stroke-2"/>
                </div>

            </div>
        </div>);
}

export default IssueBlank;
