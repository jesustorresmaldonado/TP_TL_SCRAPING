# Proyecto de Comparación de Rankings de Lenguajes de Programación

Este proyecto permite obtener los rankings de lenguajes de programación de tres fuentes distintas: TIOBE, Tecsify y PYPL. Luego, combina estos datos en un archivo Excel para su análisis y comparación.

## Descripción

El objetivo del proyecto es extraer los datos de popularidad de lenguajes de programación desde tres sitios web distintos, utilizando `node-fetch` para realizar las solicitudes HTTP y `jsdom` para manipular el DOM de las páginas HTML. Finalmente, con la biblioteca `ExcelJS`, se genera un archivo en formato Excel que incluye la posición, lenguaje y otros datos relevantes para cada fuente de ranking.

## Requisitos Previos

- Node.js y npm deben estar instalados.
- Conexión a Internet para acceder a los sitios web y obtener los datos.

## Instalación

1. Clona este repositorio.
2. Instala las dependencias ejecutando el siguiente comando:

    ```bash
    npm install node-fetch jsdom exceljs
    ```

## Uso

Para ejecutar el programa y generar el archivo Excel con los rankings combinados, ejecuta el siguiente comando:

```bash
node nombre-del-archivo.js
Una vez ejecutado, el archivo ranking_combinado.xlsxse generará en el directorio del proyecto.

##Estructura del Código
obtenerRankingTIOBE() :

Realice una solicitud al sitio de TIOBE para obtener el ranking de lenguajes.
Usa jsdompara analizar el HTML y extraer la posición, lenguaje y cambio en el ranking.
obtenerRankingTecsify() :

Obtiene el ranking de lenguajes de Tecsify.
Extrae posición, lenguaje y porcentaje de uso jsdom.
obtenerRankingPYPL() :

Extrae los datos del ranking PYPL.
Extrae información como posición, lenguaje, porcentaje de uso y tendencia.
generarExcel() :

Crea un archivo Excel con columnas que combinan los rankings de TIOBE, Tecsify y PYPL.
Llena cada fila con la información obtenida de cada función de extracción.
Guarde el archivo Excel con el nombre ranking_combinado.xlsx.

##Análisis y utilidad
Este proyecto permite a desarrolladores y analistas capturar en un solo archivo Excel los datos de popularidad de los distintos lenguajes de programación, según tres fuentes relevantes. al cebtralizar esta información en un archivo estructurado, hacilita el análisis y seguimiento de la popularidad de los lenguajes en el tiempo, lo que permite ser útil para decisiones de negocio, capacitacion y estrategia tecnologica.
