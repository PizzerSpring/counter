import React, {MouseEvent} from 'react';

type ButtonPropsType = {
    title: string
    classBut: string
    callBack: (e: MouseEvent<HTMLButtonElement>) => void
    disabled: boolean
}

const Button = (props: ButtonPropsType) => {
    return (
        <>
            <button className={props.classBut} onClick={props.callBack} disabled={props.disabled}>{props.title}</button>
        </>
    );
};

export default Button;