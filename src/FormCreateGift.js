import React from "react";
import Button from "./button/Button";

const FormCreateGift = ({ addGift }) => {
    const [values, setValues] = React.useState({});

    const createGift = (event) => {
        event.preventDefault();
        const gift = {
            person: values.person,
            giftTitle: values.giftTitle,
            description: values.description,
            url: values.url,
        };
        console.log("making a gift ", gift);
        addGift(gift);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(" name:: ", name, " value:: ", value);
        setValues({ ...values, [name]: value });
    };

    return (
        <div>
            <h3>Add Gift</h3>
            <form onSubmit={createGift}>
                <input
                    type="text"
                    placeholder="Person"
                    value={values.person}
                    name="person"
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Gift Title"
                    value={values.giftTitle}
                    name="giftTitle"
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="Gift description"
                    name="description"
                    onChange={handleInputChange}
                    value={values.description}
                />
                <input
                    type="text"
                    placeholder="http://www.amazon.com"
                    value={values.url}
                    name="url"
                    onChange={handleInputChange}
                />

                <Button type="submit">Add Gift</Button>
            </form>
        </div>
    );
};

export default FormCreateGift;
