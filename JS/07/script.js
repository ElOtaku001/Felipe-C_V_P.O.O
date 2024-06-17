function ejemplo(elemento) {
        console.log("elemento clickeado", elemento);
        elemento.style.backgroundColor = 'yellow';
         elemento.textContent = 'Clickeado!';
        }
function turnOff(element) {
            element.innerText = "Off";
            }

function hide(element) {
        element.remove();
        }