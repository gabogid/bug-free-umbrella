document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector(".grid");
    const generateBtn = document.getElementById("generateBtn");
  
    const phrases = [
      "TOMA RIESGOS CALCULADOS",
      "ELIGE BIEN A TU PAREJA",
      "ALEJATE DE LAS DEUDAS",
      "CONSTRUYE MÁS DE UNA FUENTE DE INGRESOS",
      "NO VIVIR DE LAS APARIENCIAS",
      "DESARROLLA EL HÁBITO",
      "NUNCA DEJES DE APRENDER",
      "EVITA LA INFLACIÓN DEL ESTILO DE VIDA",
      "EMPIEZA A INVERTIR LO MAS PRONTO POSIBLE",
      "INVIERTE MÁS ALLÁ DEL MÍNIMO ESFUERZO",
      "EDÚCATE, PERO EDÚCATE SELECTIVAMENTE"
    ];
  
    for (let i = 0; i < phrases.length; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.contentEditable = true;
      gridItem.textContent = phrases[i];
      gridItem.addEventListener("focus", clearText);
      gridItem.addEventListener("blur", restoreText);
      gridItem.addEventListener("keydown", handleKeyDown);
      grid.appendChild(gridItem);
    }
  
    function clearText(event) {
      const target = event.target;
      if (target.textContent === phrases[i]) {
        target.textContent = "";
      }
    }
  
    function restoreText(event) {
      const target = event.target;
      if (target.textContent === "") {
        target.textContent = phrases[i];
      }
    }
  
    function handleKeyDown(event) {
      const target = event.target;
      if (target.textContent === phrases[i]) {
        target.textContent = "";
      }
    }
  
    generateBtn.addEventListener("click", function () {
      const gridItems = Array.from(document.querySelectorAll(".grid-item"));
  
      html2canvas(grid, {
        scrollX: 0,
        scrollY: -window.scrollY,
      }).then(function (canvas) {
        const imgData = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.download = "frases.jpg";
        link.href = imgData;
        link.click();
      });
    });
  });
  