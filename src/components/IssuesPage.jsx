/* eslint-disable no-unused-vars */
import React from "react";
import IconBadge from "./ui/IconBadge";
import IssueRow from "./ui/IssueRow";
import IssueBlank from "./ui/IssueBlank";
import SearchBar from "./ui/SearchBar";
import Button from "./ui/Button";
import Tab from "./ui/Tab";
import { ReactComponent as Exclamation } from "../assets/icons/Exclamation.svg";
import { ReactComponent as CheckCircle } from "../assets/icons/CheckCircle.svg";
import { ReactComponent as ChevronDown } from "../assets/icons/ChevronDown.svg";
/* eslint-enable no-unused-vars */

function IssuesPage()
{
    const [isFilterOpen, setFilterOpen] = React.useState(false);

    function toggleFilters()
    {
        setFilterOpen(!isFilterOpen);
    }

    return (
        <div className="flex flex-col flex-grow mx-5 sm:mx-10 md:mx-16 lg:mx-32 xl:mx-64 sm:my-5">
            <div className="">
                <div className="flex justify-between space-x-5 sm:my-5 my-3">
                    <div className="flex place-items-end">
                        <SearchBar/>
                    </div>
                    <div className="flex-shrink-0">
                        <Button text="New Issue"/>
                    </div>
                </div>
                <div className="relative bg-gray-200 border-t border-gray-100 overflow-hidden z-10 rounded-t-lg shadow-md">
                    <div className="sm:flex sm:flex-wrap sm:justify-between border-b border-teal-500">
                        <div className="flex bg-gray-200 px-5 pb-3 pt-2 justify-between">
                            <div className="flex flex-wrap w-auto">
                                <IconBadge semibold={true} icon={<Exclamation className="text-teal-600"/>} text="50,000 Open"/>
                                <IconBadge icon={<CheckCircle className="text-teal-600"/>} text="94,000 Closed"/>
                            </div>
                            <div onClick={toggleFilters} className="sm:hidden relative -mx-2 h-auto flex text-teal-800 hover:text-teal-600">
                                <ChevronDown className={`flex-shrink-0 duration-100 transition-all transform self-end w-6 h-6 stroke-2 ${ isFilterOpen && "rotate-90" }`}/>
                            </div>
                        </div>
                        <div className={`flex relative z-0 self-end mx-5 duration-100 origin-bottom transition-transform sm:transition-none transform sm:translate-y-0 sm:h-full sm:visible  ${ isFilterOpen ? "h-full" : "h-0 translate-y-full" }`}>
                            <Tab text={"Author"}/>
                            <Tab text={"Tag"}/>
                            <Tab text={"Sort"}/>
                        </div>
                    </div>

                    <div className="relative z-10 flex-grow bg-green-500 text-gray-800">

                        <IssueRow days="2" new={true} author="Gary M" number="2" renderFlag={true} title="This web app is in serious need of actual code..." replies="10,000,000"/>
                        <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/>
                        <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/>
                        <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/>
                        {/* <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/>
                        <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/>
                        <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/>
                        <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/>
                        <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/>
                        <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/>
                        <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/>
                        <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/>
                        <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/>
                        <IssueRow days="5" new={true} author="SpruceBoy" number="1" title="I'm not going to tell you how to do your own job, but" replies="1"/> */}


                    </div>
                </div>

            </div>
            <IssueBlank/>
        </div>);
}

export default IssuesPage;