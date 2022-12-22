import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth, G_provider, rdb } from "../../firebase";
import "./SignUpCard.css";

function SignUpCards() {
    const email = useRef(null);
    const password = useRef(null);
    const displayName = useRef(null);
    const dispatch = useDispatch();
    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            email.current?.value,
            password.current?.value
        )
            .then((authUser) => {
                rdb.ref("/users/").child(authUser.user.uid).set({
                    displayName: displayName.current?.value,
                    email: authUser.user.email,
                });
                dispatch(
                    login({
                        displayName: displayName.current?.value,
                        email: authUser.user.email,
                    })
                );
            })
            .catch((err) => alert(err.message));
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithPopup(G_provider).then((authUser) => {
            dispatch(
                login({
                    displayName: authUser.user.displayName,
                    email: authUser.user.email,
                })
            );
        });
    };

    return (
        <div className="login__card">
            <h2>Sign Up</h2>
            <form className="login__cred">
                <input
                    type="name"
                    ref={displayName}
                    placeholder="Enter your name"
                />
                <input
                    type="email"
                    ref={email}
                    placeholder="Enter your email"
                />
                <input
                    type="password"
                    ref={password}
                    placeholder="Create your password"
                />
                <button type="submit" onClick={(e) => signUp(e)}>
                    Create Account
                </button>
            </form>
            <button className="google_signin" onClick={(e) => signIn(e)}>
                Continue with Google
            </button>
        </div>
    );
}

export default SignUpCards;
