/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./ui/Button";
import { useHistory } from "react-router-dom";
/* eslint-enable no-unused-vars */

function HomePage()
{
    const history = useHistory();

    return(
        <div className="mx-5 my-5">
            Hello this is the home page
            <div className="my-5">
                <Button onClick={() => history.push("/issues")} text="Issues Page"/>
            </div>
        </div>
    );
}

export default HomePage;