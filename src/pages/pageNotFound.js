import React from "react";
import Cat from "./resources/cat.gif";

export default function PageNotFound() {

    return (
        <div>
            <div className='white-text' style={{fontSize: '100px'}}>НЕТ ПУТИ :(</div>
            <img style={{width: '800px'}} src={Cat}/>
        </div>
    )
}