import React from "react";
import { Link, useParams } from "react-router-dom";

function GiftDetail(props) {
    const { giftId } = useParams();
    const currGift = props.gifts.filter((gift) => gift._id === giftId);
    const thisGift = { ...currGift[0] };
    console.log(thisGift.url);
    return (
        <div>
            <p class="person">Gift for {thisGift.person}</p>
            <p>Gift: {thisGift.giftTitle}</p>
            <p>Gift Description: {thisGift.description}</p>
            <a href={thisGift.url} target="_blank">
                <p>Visit: {thisGift.url}</p>
            </a>
            <button>
                <Link to="/">Home</Link>
            </button>
        </div>
    );
}

export default GiftDetail;
