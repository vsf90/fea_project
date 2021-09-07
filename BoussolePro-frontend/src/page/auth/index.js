import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../../components/Login/Login.component";
import Register from "../../components/Login/Register.component";
import { useConfig } from "../../config";

function Authentication(props) {
    const [loggedIn, setloggedIn] = useState(false);
    

    const config = useConfig();

    return config.isLoggedIn() ? <Redirect to='/' /> : (
        <Switch>
            <Route path='/auth/register' component={Register}/>
            <Route path='/auth/login' component={() => <Login signIn={(user) => setloggedIn(true)} />}/>
            <Redirect from='*' to='/auth/login' />
        </Switch>
    );
}
export default Authentication;