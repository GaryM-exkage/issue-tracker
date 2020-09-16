/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./ui/Button";
import { useHistory } from "react-router-dom";
import { ReactComponent as Refresh } from "../assets/icons/Refresh.svg";
/* eslint-enable no-unused-vars */

function HomePage()
{
    const history = useHistory();

    const [users, setUsers] = React.useState([]);

    React.useLayoutEffect(() =>
    {
        fetch("/users")
            .then(res => res.json())
            .then(foundUsers => setUsers(foundUsers));
        // .then(foundUsers => setUsers(foundUsers));

    }, []);

    return(
        <div className="mx-5 my-5">
            Hello this is the home page
            {users.length == 0 && <Refresh className="h-16 w-16 stroke-2 text-teal-700 animate-spin"/>}
            {users.map(user =>
                <div key={user.id}>{user.username}</div>,
            )}
            <div className="my-5">
                <Button onClick={() => history.push("/issues")} text="Issues Page"/>
            </div>
        </div>
    );
}

export default HomePage;