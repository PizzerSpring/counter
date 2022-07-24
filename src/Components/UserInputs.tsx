import React, {ChangeEvent, useEffect, useState} from 'react';
import style from './UserInputs.module.css';
import Input from "./Input/Input";
import Button from "./Button/Button";

type UserInputsPropsType = {
    count: number
    startValue: number
    maxValue: number
    errorValue: string
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setCount: (value: number) => void
    setErrorValue: (errText: string) => void
    active: string
    setActive: (value: string) => void
}

const UserInputs = (props: UserInputsPropsType) => {
    const [disSet, setDisSet] = useState(false);
    useEffect(() => {
        const sValue = localStorage.getItem('startValue');
        if (sValue) {
            props.setStartValue(+sValue);
        }
    }, [])

    useEffect(() => {
        const mValue = localStorage.getItem('maxValue');
        if (mValue) {
            props.setMaxValue(+mValue);
        }
    }, [])

    useEffect(() => {
            localStorage.setItem('maxValue', props.maxValue.toString());
        },
        [props.maxValue]);

    useEffect(() => {
            localStorage.setItem('startValue', props.startValue.toString());
        },
        [props.startValue]);

    useEffect(() => {
        props.maxValue <= props.startValue || props.maxValue < 0 || props.startValue < 0 ? props.setErrorValue('Error')
            : props.setErrorValue('');
    }, [
        props.maxValue, props.startValue,
    ])

    useEffect(() => {
        const cValue = localStorage.getItem('count');
        if (cValue) {
            props.setCount(+cValue);
            props.setActive('');


            props.setErrorValue('');
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('count', props.count.toString());

    }, [
        props.count
    ])

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDisSet(false);
        props.setActive('enter value and press set');
        props.setMaxValue(+e.currentTarget.value);
    }


    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDisSet(false);
        props.setActive('enter value and press set');
        props.setStartValue(+e.currentTarget.value);
    }

    const setItemHandler = () => {
        props.setActive('');
        setDisSet(true);
        props.setCount(props.startValue);
    }


    return (
        <div>
            <h1 className={style.title}>COUNTER</h1>
            <Input
                classDiv={`${style.text}  ${style.inputContainer}`}
                classSpan={style.textMax}
                classInput={`${style.input} ${style.inputMax}`}
                title={'max value'}
                value={props.maxValue}
                callBack={onChangeMaxValueHandler}/>
            <Input
                classDiv={style.text}
                classSpan={style.textStart}
                classInput={style.input}
                title={'start value'}
                value={props.startValue}
                callBack={onChangeStartValueHandler}/>
            <Button
                title={'Set'}
                classBut={style.button}
                callBack={setItemHandler}
                disabled={!!props.errorValue || disSet}/>
        </div>
    );
};

export default UserInputs;