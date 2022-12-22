import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        displayName: authUser.displayName,
                        email: authUser.email,
                    })
                );
            } else {
                dispatch(logout());
            }
        });

        return unsubscribe;
    }, [dispatch]);

    return (
        <div className="App">
            <Router>
                {!user ? (
                    <LoginScreen />
                ) : (
                    <Switch>
                        <Route path="/ProfileScreen">
                            <ProfileScreen />
                        </Route>
                        <Route path="/">
                            <HomeScreen />
                        </Route>
                    </Switch>
                )}
            </Router>
        </div>
    );
}

export default App;
