import { useState } from "react";
import LoginCard from "../../Conponents/LoginCard/LoginCard";
import SignUpCards from "../../Conponents/SignUpCard/SignUpCards";
import "./LoginScreen.css";

function LoginScreen() {
    const [Show, setShow] = useState(false);
    const [signUpScreen, setSignUpScreen] = useState(false);

    return (
        <div className="loginScreen">
            <div className="nav_bar">
                <img
                    className="logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="logo"
                />

                <button
                    className="signUp"
                    onClick={() => {
                        setShow(true);
                        setSignUpScreen(true);
                    }}
                >
                    Sign Up
                </button>
            </div>
            {Show ? (
                <div className="loginScreen_body">
                    {signUpScreen ? <SignUpCards /> : <LoginCard />}
                </div>
            ) : (
                <div className="loginScreen_body">
                    <h1>Unlimited films, TV programes and more.</h1>
                    <h3>Watch anywhere, Cancel at any time.</h3>
                    <p>
                        Ready to watch? Enter your email to create or restart
                        your profile.
                    </p>
                    <div className="input_email">
                        <input type="email" placeholder="Enter Your Email" />
                        <button onClick={() => setShow(true)}>
                            GET STARTED
                        </button>
                    </div>
                </div>
            )}

            <div className="fade" />
        </div>
    );
}

export default LoginScreen;
