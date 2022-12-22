import { useSelector } from "react-redux";
import Nav from "../../Conponents/Nav/Nav";
import { selectUser } from "../../features/userSlice";
import { auth, rdb } from "../../firebase";
import "./ProfileScreen.css";

function ProfileScreen() {
    const user = useSelector(selectUser);
    const uid = user.uID;
    console.log(uid);

    const readDB = (e) => {
        rdb.ref("/users/")
            .child(uid)
            .on("value", (snapshot) => {
                console.log(snapshot.val());
            });
    };

    const userOrder = (e) => {
        rdb.ref("orders/").child(uid).set({
            orderName: "HCV",
            orderPrice: "400",
            orderTrack: "Dispatched",
        });
    };

    const trackOrder = (e) => {
        rdb.ref("orders/")
            .child(uid)
            .on("value", (snapshot) => {
                console.log(snapshot.val());
            });
    };

    return (
        <div>
            <Nav />
            <div className="Profile__container">
                <div className="Profile__card">
                    <img
                        className="profile__image"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaZHMq96U_lrLbWhprtoemzvl1a-liKzfj0Tqg6upNdAc9G2Nr3NlbncE2F2Dr_J5pv8&usqp=CAU"
                        alt="profile"
                    />
                    <div className="Profile__ibfo">
                        <h3> {user.email} </h3>
                        <h3> {user?.displayName} </h3>
                        <div className="Plans">
                            <div className="plan">
                                <h5>Standard</h5>
                                <button onClick={(e) => readDB(e)}>
                                    Subscribe
                                </button>
                            </div>
                            <div className="plan">
                                <h5>Basic</h5>
                                <button onClick={(e) => userOrder(e)}>
                                    Subscribe
                                </button>
                            </div>
                            <div className="plan">
                                <h5>Premium</h5>
                                <button onClick={(e) => trackOrder(e)}>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <button
                            className="sign__OUT"
                            onClick={() => auth.signOut()}
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;
