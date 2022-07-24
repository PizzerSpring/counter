import React, {useState, MouseEvent} from 'react';
import style from './Count.module.css';
import Button from "./Button/Button";

type CountPropsType = {
    count: number
    startValue: number
    maxValue: number
    setCount: (value: number) => void
    errorValue: string
    active: string
}

const Count = (props: CountPropsType) => {

    const IncrementCountHandler = (e: MouseEvent<HTMLButtonElement>) => {
        props.setCount(props.count + 1);
    }
    const ResetCountHandler = () => {
        props.setCount(props.startValue);
    }
    return (
        <div>
            <div>
                {props.active ?
                    <div>{props.errorValue ? <div className={style.error}>Incorrect value!</div> :
                        <div className={style.active}>{props.active}</div>}</div> :
                    <div>{props.errorValue ? <div className={style.error}>Incorrect value!</div> :
                        <div className={`${style.count} ${
                            +props.maxValue - props.count === 0 ? style.inactiveCount : ''
                        }`}>{props.count}</div>}</div>
                }
            </div>
            <Button
                title={'Inc'}
                classBut={style.button}
                callBack={IncrementCountHandler}
                disabled={
                    !!props.errorValue || +props.maxValue - props.count === 0 || !!props.active
                }/>
            {props.errorValue || props.active ?
                <Button
                    title={'Reset'}
                    classBut={`${style.button} ${style.buttonReset}`}
                    callBack={ResetCountHandler}
                    disabled={true}/>
                 :
                <Button
                    title={'Reset'}
                    classBut={`${style.button} ${style.buttonReset}`}
                    callBack={ResetCountHandler}
                    disabled={false}/>
              }
        </div>
    );
};

export default Count;