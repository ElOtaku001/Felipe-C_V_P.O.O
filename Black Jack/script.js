let count = 0;

function countCards() {
  // Obtiene el valor del input con id "cardInput" y lo convierte a mayúsculas
  const cardInput = document.getElementById("cardInput").value.toUpperCase();
  // Divide el valor del input por comas y elimina espacios alrededor de cada elemento
  const cards = cardInput.split(",").map(card => card.trim()); // Split por comas y elimina espacios

  cards.forEach(card => {
    switch (card) {
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
        count += 1;
        break;
      case "7":
      case "8":
      case "9":
        count += 0;
        break;
      case "10":
      case "J":
      case "Q":
      case "K":
      case "A":
        count -= 1;
        break;
      default:
        // No hace nada para valores invalidos
        break;
    }
  });

  const result = count >= 0 ? `${count} Bet` : `${count} Hold`;
  document.getElementById("result").textContent = `Resultado final: ${result}`;
}
// El metodo .trim() elimina los espacios en blanco al principio y al final de una cadena.
// El metodo .split() se utiliza para dividir una cadena en un array de subcadenas,basandose en un delimitador especificado.
// El metodo .map() crea un nuevo array con los resultados de aplicar una funcion a cada elemento del array