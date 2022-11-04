let questions = [
    ['ВОРОТНИК', 'Что мексиканцы изготовляли из волокнистой древесины кактусов'],
    ['ЧЕРЕПАХА', "Какое животное дало название распространенному в Древнем Риме способу боевого построения"],
    ["ТОРОНТО", "В метро этого города для того, чтобы играть в переходах, нужно еще получить специальную лицензию "],
    ["КАБАЧОК", "Овощ, чьи полезные вещества используют для борьбы с подагрой "],
    ["МАНИШКА", "Белый нагрудник на мужской сорочке "],
    ["УТКОНОС", "Единственное ядовитое млекопитающее в мире "],
    ["БУНГАЛО", "Легкая загородная постройка с верандой, распространенная в тропических странах"]
]

let currentTurn = 0;
let players = ['shrt', 'mediumNm', 'veryLongName'];

export function getCurrentPlayer() {
    return players[currentTurn];
}

export function getQuestionPair() {
    let rand = Math.floor(Math.random() * questions.length);
    let pair = questions[rand];
    pair = [pair[0].split(''), pair[1]];
    return pair;
}

export function getTurn() {
    console.log("Turn "+currentTurn);
    return currentTurn;
}

export function setTurn(turn) {
    currentTurn = turn;
}
