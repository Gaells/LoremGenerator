const frases = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

document.getElementById("gerar").addEventListener("click", function () {
    const numParagrafos = parseInt(document.getElementById("numParagrafos").value);
    const frasesPorParagrafo = parseInt(document.getElementById("frasesPorParagrafo").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    for (let i = 0; i < numParagrafos; i++) {
        const paragrafo = document.createElement("p");
        for (let j = 0; j < frasesPorParagrafo; j++) {
            const randIndex = Math.floor(Math.random() * frases.length);
            paragrafo.innerHTML += frases[randIndex] + " ";
        }
        resultado.appendChild(paragrafo);
    }
});
