import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth, rdb, G_provider } from "../../firebase";
import "./LoginCards.css";

function LoginCard() {
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();

    const loginUser = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            email.current?.value,
            password.current?.value
        )
            .then((authUser) => {
                dispatch(
                    login({
                        displayName: authUser.user?.displayName,
                        email: authUser.user.email,
                    })
                );
            })
            .catch((err) => alert(err.message));
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithPopup(G_provider).then((authUser) => {
            rdb.ref("/users/" + authUser.user.uid).set({
                displayName: authUser.user.displayName,
                email: authUser.user.email,
            });
            console.log(authUser.user.uID);
            dispatch(
                login({
                    uID: authUser.user.uid,
                    displayName: authUser.user.displayName,
                    email: authUser.user.email,
                })
            );
        });
    };

    return (
        <div className="login__card">
            <h2>Sign In</h2>
            <form className="login__cred">
                <input
                    type="email"
                    ref={email}
                    placeholder="Enter your email"
                />
                <input type="password" placeholder="Enter your password" />
                <button type="submit" onClick={(e) => loginUser(e)}>
                    Login
                </button>
                <button className="google_signin" onClick={(e) => signIn(e)}>
                    Continue with Google
                </button>
                <p>
                    New to Netflix?<span className="bold"> Sign up Now</span>
                </p>
            </form>
        </div>
    );
}

export default LoginCard;
