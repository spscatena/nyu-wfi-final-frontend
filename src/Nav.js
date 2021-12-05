import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./button/Button";

const NavStyles = styled.nav`
    --bg-color: var(--corp-blue);
    --btn-color: var(--corp-btn);
    height: 10rem;
    width: 100%;
    background-color: var(--bg-color);
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    a {
        color: #fff;
        padding: 1rem;
        font-size: 2rem;
        text-decoration: none;
    }
    /* button {
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0 1rem;
    background: #007eb6;
    border: 10px solid #fff;
    border-radius: 3px;
    align-self: center;
  } */
`;

const Nav = ({ loggedin, setLoggedin }) => {
    return (
        <div class="nav">
            <div class="nav1" style={{ border: "2px solid green" }}>
                <h1>
                    Christmas List
                    {/* <Link to="/">Gifts</Link> */}
                </h1>
            </div>
            <div>
                {loggedin ? (
                    <Button func={() => setLoggedin(false)}>Close Form</Button>
                ) : (
                    <Button func={() => setLoggedin(true)}>Add Gift</Button>
                )}
            </div>
        </div>
    );
};

export default Nav;
