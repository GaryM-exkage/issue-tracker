/* eslint-disable no-unused-vars */
import React from "react";
import { ReactComponent as Mail } from "../assets/icons/Mail.svg";
/* eslint-enable no-unused-vars */

function Footer()
{
    const year = new Date().getFullYear();
    return (
        <div className="pt-8">
            <div className="border-t mx-20 border-gray-400"></div>
            <div className="flex sm:flex-row flex-col place-items-center sm:justify-center sm:space-x-8 space-x-3 py-3 text-gray-500">
                <div>
                    Copyright Gary McWhorter © {year}
                </div>
                <div className="flex space-x-1">
                    <Mail className="h-6 w-6"/>
                    <div>Contact Me</div>
                </div>
            </div>
        </div>);
}

export default Footer;