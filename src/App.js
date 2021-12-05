import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Gifts from "./Gifts";
import GiftDetail from "./GiftDetail";
import Nav from "./Nav";

import useFetch from "./hooks/useFetch";
import useToggle from "./hooks/useToggle";

function App() {
    const [gifts, setGifts] = React.useState([]);
    const [loggedin, setLoggedin] = useToggle(true);
    const [loading, setLoading] = useToggle(true);
    const [error, setError] = React.useState("");
    const { get, post, del } = useFetch("/api/gifts");

    /* eslint-disable react-hooks/exhaustive-deps */
    React.useEffect(() => {
        setLoading(true);
        get("/api/gifts")
            .then((data) => {
                setGifts(data);
                // setLoading(false);
            })
            .catch((error) => setError(error));
        // .finally(setLoading(false));
    }, []);

    const addGift = (gift) => {
        post("/api/gifts", gift).then((data) => {
            setGifts([data, ...gifts]);
        });
    };

    const deleteGift = (gift) => {
        del(`/api/gifts/${gift._id}`).then(() => {
            const filteredGifts = gifts.filter((g) => g._id != gift._id);
            setGifts(filteredGifts);
        });
    };

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <BrowserRouter>
                <Nav loggedin={loggedin} setLoggedin={setLoggedin} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Gifts
                                gifts={gifts}
                                loggedin={loggedin}
                                addGift={addGift}
                                deleteGift={deleteGift}
                            />
                        }
                    />
                    <Route
                        path="/:giftId"
                        element={<GiftDetail gifts={gifts} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
