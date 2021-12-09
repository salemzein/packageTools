import './style.scss';
function component() {
    const element = document.createElement("div");
  
    element.innerHTML = "<h1>this new  </h1>";
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());