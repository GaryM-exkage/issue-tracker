/* eslint-disable no-unused-vars */
import React from "react";
import { ReactComponent as Exclamation } from "../../assets/icons/Exclamation.svg";
import { ReactComponent as Message } from "../../assets/icons/Message.svg";
import { ReactComponent as Flag } from "../../assets/icons/Flag.svg";
import { ReactComponent as Fire } from "../../assets/icons/Fire.svg";
/* eslint-enable no-unused-vars */

function IssueRow(props)
{
    return (
        <a href="/" className={`flex sm:flex-row flex-col leading-tight bg-white justify-between hover:bg-gray-100 ${!props.last && "border-b border-gray-200"}`}>
            <div className="flex pl-5 pr-3 sm:pr-0 pt-3 sm:pt-4 pb-3 space-x-1">
                <Exclamation className="flex-shrink-0 h-6 w-6 text-teal-600"/>
                <div>
                    <div>{props.title}</div>
                    <div className="text-xs mt-1 sm:mt-3 text-gray-600">#{props.number} opened {props.days} days ago by {props.author}</div>
                </div>
            </div>
            <div className="flex h-full ml-2 justify-end mr-3 sm:flex-row sm:py-4 pb-1">
                <div className="flex flex-shrink-0 mr-5 justify-right text-teal-600">
                    {props.new && <Fire className="h-5 w-5"/>}
                    {props.renderFlag && <Flag className="h-5 w-5"/>}
                </div>
                <div className="flex flex-shrink-0 w-30">
                    {props.replies && <Message className="w-auto h-5 text-teal-700 fill-current"/>}
                    {/* <div className="mr-5 w-16 transform -translate-y-1">{props.replies}</div> */}
                    <div className="mr-1 text-sm self-center transform leading-none w-auto sm:w-16">{props.replies}</div>
                </div>
            </div>
        </a>);
}

export default IssueRow;