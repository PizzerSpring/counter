import React, {useEffect, useState} from 'react';
import './App.css';
import UserInputs from "./Components/UserInputs";
import Count from "./Components/Count";

function App() {
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);

    const [count, setCount] = useState<number>(0);

    const [errorValue, setErrorValue] = useState('Error');

    const [active, setActive] = useState('');

    useEffect(() => {
        const sValue = localStorage.getItem('startValue');
        const mValue = localStorage.getItem('maxValue');
        const cValue = localStorage.getItem('count');

        if (sValue && mValue && cValue) {
            setStartValue(+sValue);
            setMaxValue(+mValue);
            setCount(+cValue);
            setActive('');
            setErrorValue('');
        }
    }, [])

    return (
        <div className="App">
            <UserInputs
                count={count}
                errorValue={errorValue}
                startValue={startValue}
                maxValue={maxValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                setCount={setCount}
                setErrorValue={setErrorValue}
                active={active}
                setActive={setActive}
            />
            <Count
                active={active}
                startValue={startValue}
                maxValue={maxValue}
                count={count}
                setCount={setCount}
                errorValue={errorValue}
            />
        </div>
    );
}

export default App;
