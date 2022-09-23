import React from "react";
import "./inputBox.css";


export default function InputBox() {
    const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я',
        'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
    //TODO переписать под бэкенд
    let word = ['M', 'U', 'L', 'E'];
    let usedChars = [];
    let activeBoxValue = 0;

    function inputBoxHandler(event) {
        if (arr_en.includes(event.key) || arr_ru.includes(event.key)) {
            event.target.value = event.key.toString().toUpperCase();
        }
        activeBoxValue = event.target.getAttribute("inputboxnumber");
    }

    function disableRightGuess() {
        let dom = document.querySelector(`[inputboxnumber="${activeBoxValue}"]`);
        //TODO фиксация буквы
        if (dom.value === word[activeBoxValue])
            dom.disabled = true;
        else {
            //TODO отправлять на сервер
            usedChars.push(dom.value);
        }
        console.log(dom.value);
    }

    //TODO динамическое изменение размера бокса
    const wordList = word.map((char, index) => <input className={`char char-${index}`} inputboxnumber={index} type="text" disabled={false} maxLength="1" onKeyDown={inputBoxHandler}/>);
    return (
        <div>
            <div className="inputbox">
              {wordList}
            </div>
            <div>
                <br></br>
                <button type="button" className="button-27" onClick={disableRightGuess}>Submit</button>
            </div>
        </div>
    );
}