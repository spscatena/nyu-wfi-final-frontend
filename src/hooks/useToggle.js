import react from "react";
import { useState } from "react";

function useToggle(initialVal = false) {
    const [state, setState] = useState();

    const toggle = () => {
        setState(!state);
    };

    return [state, toggle];
}

export default useToggle;
