import React, {ChangeEvent, useState} from "react";

export const FullInput = () => {
    let [title, setTitle] = useState("")
    console.log(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    return (
        <div>
            {/*1. что-то печатаем в input*/}
            {/*2. это сохраняется в локальном State*/}
            {/*3. при нажатии кнопки это отправляется в useState*/}
            <input onChange={onChangeInputHandler}/>
            <button onClick={() => {}}>+</button>
        </div>
    )
}