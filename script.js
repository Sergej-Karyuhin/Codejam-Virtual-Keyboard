let area =
  document.createElement("textarea");
  area.setAttribute("id","area");
  area.setAttribute("class","area");
  area.setAttribute("cols", "100");
  area.setAttribute("rows", "10");
  document.body.append(area);

let keyboard =
  document.createElement("div");
  keyboard.setAttribute("class", "keyboard");
  document.body.append(keyboard);

let language = +localStorage.getItem("language");
let keyArray = [];
let array = [
  ["Backquote", "`","~","ё","Ё"],
  ["Digit1", "1","!","1","!"],
  ["Digit2", "2","@","2",'"'],
  ["Digit3", "3","#","3","№"],
  ["Digit4", "4","$","4",";"],
  ["Digit5", "5","%","5","%"],
  ["Digit6", "6","^","6",":"],
  ["Digit7", "7","&","7","?"],
  ["Digit8", "8","*","8","*"],
  ["Digit9", "9","(","9","("],
  ["Digit0", "0",")","0",")"],
  ["Minus", "-","_","-","_"],
  ["Equal", "=","+","=","+"],
  ["Backspace", "Backspace","Backspace","Backspace","Backspace"],
  ["Tab", "Tab","Tab","Tab","Tab"],
  ["KeyQ", "q","Q","й","Й"],
  ["KeyW", "w","W","ц","Ц"],
  ["KeyE", "e","E","у","У"],
  ["KeyR", "r","R","к","К"],
  ["KeyT", "t","T","е","Е"],
  ["KeyY", "y","Y","н","Н"],
  ["KeyU", "u","U","г","Г"],
  ["KeyI", "i","I","ш","Ш"],
  ["KeyO", "o","O","щ","Щ"],
  ["KeyP", "p","P","з","З"],
  ["BracketLeft", "[","{","х","Х"],
  ["BracketRight", "]","}","ъ","Ъ"],
  ["Backslash", "\\","|","\\","/"],
  ["Delete", "Del", "Del", "Del", "Del"],
  ["CapsLock", "Caps Lock","Caps Lock","Caps Lock","Caps Lock"],
  ["KeyA", "a","A","ф","Ф"],
  ["KeyS", "s","S","ы","Ы"],
  ["KeyD", "d","D","в","В"],
  ["KeyF", "f","F","а","А"],
  ["KeyG", "g","G","п","П"],
  ["KeyH", "h","H","р","Р"],
  ["KeyJ", "j","J","о","О"],
  ["KeyK", "k","K","л","Л"],
  ["KeyL", "l","L","д","Д"],
  ["Semicolon", ";",":","ж","Ж"],
  ["Quote", "'",'"',"э","Э"],
  ["Enter", "\n","\n","\n","\n"],
  ["ShiftLeft", "Shift","Shift","Shift","Shift"],
  ["KeyZ", "z","Z","я","Я"],
  ["KeyX", "x","X","ч","Ч"],
  ["KeyC", "c","C","с","С"],
  ["KeyV", "v","V","м","М"],
  ["KeyB", "b","B","и","И"],
  ["KeyN", "n","N","т","Т"],
  ["KeyM", "m","M","ь","Ь"],
  ["Comma", ",","<","б","Б"],
  ["Period", ".",">","ю","Ю"],
  ["Slash", "/","?",".",","],
  ["ShiftRight", "Shift","Shift","Shift","Shift"],
  ["ControlLeft", "Ctrl","Ctrl","Ctrl","Ctrl"],
  ["WinLeft", "Win","Win","Win","Win"],
  ["AltLeft", "Alt","Alt","Alt","Alt"],
  ["Space", " "," "," "," "],
  ["AltRight", "Alt","Alt","Alt","Alt"],
  ["WinRight", "Win","Win","Win","Win"],
  ["ControlRight", "Ctrl","Ctrl","Ctrl","Ctrl"]
];



class Key {
  constructor(value, elem) {
    this.value = value;
    this.elem = elem;
    elem.addEventListener( "mousedown", () => this.activate() );
    elem.addEventListener( "mouseup", () => this.deactivate() );
  }
  activate() {
    this.elem.classList.add("active");
    this.read();
  }
  deactivate() {
    this.elem.classList.remove("active");
  }
  read() {
    if (this.value[1] === "Backspace") {
      area.value = area.value.slice(0, -1);
    }
    else {
      if (this.value[1] !== "Ctrl" &&
          this.value[1] !== "Meta" &&
          this.value[1] !== "Alt" &&
          this.value[1] !== "Shift" &&
          this.value[1] !== "CapsLock" &&
          this.value[1] !== "Tab" &&
          this.value[1] !== "Del")
      {
        area.value += this.value[1];
      }
    }
  }
}



function printKey() {
  for (let item of array) {
    let button;
    button = document.createElement("div");
    button.setAttribute("class", "item");
    keyArray.push(new Key(item, button));

    if (item[0] === "Backspace") {
      button.style.gridColumnEnd = "span " + 7;
    }
    if (item[0] === "CapsLock") {
      button.style.gridColumnEnd = "span " + 6;
    }
    if (item[0] === "Enter") {
      button.style.gridColumnEnd = "span " + 7;
    }
    if (item[0] === "Tab") {
      button.style.gridColumnEnd = "span " + 4;
    }
    if (item[1] === "Shift") {
      button.style.gridColumnEnd = "span " + 8;
    }
    if (item[0] === "Space") {
      button.style.gridColumnEnd = "span " + 28;
    }

    keyboard.append(button);
  }
}

function printText() {
  for (let item of keyArray) {
    if (!(item.value[1] === "\n")) {
      item.elem.textContent = item.value[1];
    }
    else {
      item.elem.textContent = "Enter";
    }
  }
}



printKey();
printText();
