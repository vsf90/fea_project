import { Redirect, Route } from "react-router-dom";
import { useConfig } from "../../config";

function PrivateRoute({ component: Component, redirectTo = "/auth" , ...rest}) {
    const config = useConfig();

    return (
        <Route
            {...rest}
            render={(props) => {        
                return config.isLoggedIn() ? <Component {...props} /> : <Redirect to={redirectTo} />
            }}
        />
    );
}

export default PrivateRoute;