import React, {ChangeEvent} from 'react';

type InputPropsType = {
    classDiv: string
    classSpan: string
    classInput: string
    title: string
    value: number
    callBack: (e:ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputPropsType) => {
    return (
        <div className={props.classDiv}>
            <span className={props.classSpan}>{props.title}</span>
            <input className={props.classInput} type='number' onChange={props.callBack} value={props.value}/>
        </div>
    );
};

export default Input;