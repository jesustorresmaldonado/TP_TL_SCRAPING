import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import ExcelJS from 'exceljs';

// Función para obtener el ranking de TIOBE
async function obtenerRankingTIOBE() {
  const respuesta = await fetch("https://www.tiobe.com/tiobe-index/");
  const datos = await respuesta.text();
  const dom = new JSDOM(datos);
  const filasRanking = dom.window.document.querySelectorAll("table#top20 tr");
  
  const rankingTIOBE = [];

  for (let i = 1; i < filasRanking.length; i++) {
    const celdas = filasRanking[i].querySelectorAll("td");
    rankingTIOBE.push({
      posicion: celdas[0].textContent.trim(),
      lenguaje: celdas[4].textContent.trim(),
      cambio: celdas[5].textContent.trim(),
    });
  }
  return rankingTIOBE;
}

// Función para obtener el ranking de Tecsify
async function obtenerRankingTecsify() {
  const respuesta = await fetch("https://tecsify.com/blog/top-lenguajes-2024/");
  const datos = await respuesta.text();
  const dom = new JSDOM(datos);
  const filasRanking = dom.window.document.querySelectorAll("article table tr");

  const rankingTecsify = [];

  for (let i = 1; i < filasRanking.length; i++) {
    const celdas = filasRanking[i].querySelectorAll("td");
    
    // Verifica el número de celdas para evitar errores
    if (celdas.length >= 3) { // Asegúrate de que haya al menos 3 celdas
      rankingTecsify.push({
        posicion: celdas[0].textContent.trim(),
        lenguaje: celdas[4].textContent.trim(), // Asegúrate de que este índice es correcto
        porcentaje: celdas[5].textContent.trim(), // Asegúrate de que este índice es correcto
      });
    }
  }
  return rankingTecsify;
}

async function obtenerRankingPYPL() {
  const respuesta = await fetch("https://statisticstimes.com/tech/top-computer-languages.php");
  const datos = await respuesta.text();
  const dom = new JSDOM(datos);
  
  // Seleccionar la tabla con el ID específico
  const filasRanking = dom.window.document.querySelectorAll("#table_id1 tbody tr");

  const rankingPYPL = [];

  for (let i = 0; i < filasRanking.length; i++) {
    const celdas = filasRanking[i].querySelectorAll("td");
    
    if (celdas.length >= 5) {
      rankingPYPL.push({
        posicion: celdas[0].textContent.trim(),
        lenguaje: celdas[2].textContent.trim(),
        porcentaje: celdas[3].textContent.trim(),
        tendencia: celdas[4].textContent.trim(),
      });
    }
  }
  return rankingPYPL;
}



// Función para escribir los rankings en Excel
async function generarExcel() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Ranking");

  worksheet.columns = [
    { header: "Posición", key: "posicion", width: 10 },
    { header: "Lenguaje TIOBE", key: "lenguajeTIOBE", width: 30 },
    { header: "Cambio de Posición", key: "cambio", width: 20 },
    { header: "Posición Tecsify", key: "posicionTecsify", width: 10 },
    { header: "Lenguaje Tecsify", key: "lenguajeTecsify", width: 30 },
    { header: "Porcentaje", key: "porcentajeTecsify", width: 20 },
    { header: "Posición PYPL", key: "posicionPYPL", width: 10 },
    { header: "Lenguaje PYPL", key: "lenguajePYPL", width: 30 },
    { header: "Porcentaje PYPL", key: "porcentajePYPL", width: 20 },
  ];

  const rankingTIOBE = await obtenerRankingTIOBE();
  const rankingTecsify = await obtenerRankingTecsify();
  const rankingPYPL = await obtenerRankingPYPL();

   // Agregar datos del ranking TIOBE
   rankingTIOBE.forEach((fila, index) => {
    const filaTecsify = rankingTecsify[index] || {};
    const filaPYPL = rankingPYPL[index] || {};
    worksheet.addRow({
      posicion: fila.posicion,
      lenguajeTIOBE: fila.lenguaje,
      cambio: fila.cambio,
      posicionTecsify: filaTecsify.posicion || '',
      lenguajeTecsify: filaTecsify.lenguaje || '',
      porcentajeTecsify: filaTecsify.porcentaje || '',
      posicionPYPL: filaPYPL.posicion || '',
      lenguajePYPL: filaPYPL.lenguaje || '',
      porcentajePYPL: filaPYPL.porcentaje || '',
    });
  });

  // Guardar el archivo Excel
  await workbook.xlsx.writeFile("ranking_combinado.xlsx");
  console.log("Datos guardados en ranking_combinado.xlsx");
}

generarExcel().catch((error) => console.error(error));

