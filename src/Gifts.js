import React from "react";
import Gift from "./Gift";
import FormCreateGift from "./FormCreateGift";

function Gifts({ gifts, loggedin, addGift, deleteGift }) {
    gifts.sort((g1, g2) => {
        return g1.person.localeCompare(g2.person);
    });

    return (
        <summary>
            {loggedin && <FormCreateGift addGift={addGift} />}
            {gifts.map((gift) => (
                <Gift key={gift._id} gift={gift} deleteGift={deleteGift} />
            ))}
        </summary>
    );
}

export default Gifts;
