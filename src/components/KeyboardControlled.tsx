import { useState } from "react";
import WordDescription from './WordDescription';
import IsStrongCheck from "./isInputStrong";


export default function KeyboardControlledInput () : JSX.Element {

    const [typedMessage, setTypedMessage] = useState<string>('')

    const clearMessage = () => {
        setTypedMessage('')
    }


    return (
        <>
        <input

            value = {typedMessage}
            onChange = {(event) => {
                setTypedMessage(event.target.value)
            }}
        />
        <WordDescription wordToDescribe={typedMessage}/>
        <IsStrongCheck wordToDescribe={typedMessage}/>
        <button onClick={clearMessage}>Clear All</button>
        </>
    )

}