/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import IssuesPage from "./IssuesPage";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";
import Footer from "./Footer";
import
{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
} from "react-router-dom";
/* eslint-enable no-unused-vars */

function App()
{

    return (
        <Router>
            <div className="bg-gray-300 flex flex-col min-h-screen">
                <Navbar/>

                <Switch>

                    <Route exact path="/">
                        <HomePage/>
                    </Route>

                    <Route path="/profile">
                        <ProfilePage/>
                    </Route>

                    <Route path="/settings">
                        <SettingsPage/>
                    </Route>

                    <Route path="/issues">
                        <IssuesPage/>
                    </Route>

                </Switch>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
