import { useState } from "react";

export default function useDecimalState(initialState, maxLeftDigits=3, maxRightDigits=2) {

    const [state, setState] = useState(initialState);

    const decimalPattern = `^\\d{0,${maxLeftDigits}}\\.?\\d{0,${maxRightDigits}}$`;

    const validDecimal = new RegExp(decimalPattern);

    function validate(newState) {

        if(newState.length>maxLeftDigits && !newState.includes('.'))
            newState = newState.substr(0,maxLeftDigits) + '.' + newState.substr(maxLeftDigits);

        if( validDecimal.test(newState) )
            setState(newState);

    }

    return [state, validate];

}