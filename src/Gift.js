import React from "react";
import { Link } from "react-router-dom";
import Button from "./button/Button";

//each gift main page
function Gift({ gift, deleteGift }) {
    const { giftTitle, person, description, _id } = gift;
    return (
        <div class="gifts">
            <button onClick={() => deleteGift(gift)}>Delete</button>
            <p class="person">{person}:</p>
            <Link to={_id}>
                <p class="gift-link">{giftTitle}</p>
            </Link>
        </div>
    );
}

export default Gift;
