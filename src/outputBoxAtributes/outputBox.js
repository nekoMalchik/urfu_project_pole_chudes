import React, {useRef} from "react";
import "./outputBox.css"

export default function OutputBox() {
    const outputRef = useRef(null);

    const doOutput = () => {
        console.log('kk');
    }

    return (
        <div>
            <div id="outputBox" ref={outputRef}></div>
        </div>
    );
}