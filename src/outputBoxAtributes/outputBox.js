import React, {useEffect, useRef} from "react";
import "./outputBox.css"

export default function OutputBox() {
    const outputRef = useRef(null);

    return (
        <div>
            <div id="outputBox" ref={outputRef}></div>
        </div>
    );
}