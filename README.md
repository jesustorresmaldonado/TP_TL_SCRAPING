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
 ```
Una vez ejecutado, el archivo `ranking_combinado.xlsx` se generará en el directorio del proyecto.

## Estructura del Código

1. **obtenerRankingTIOBE()**: 
   - Realiza una solicitud al sitio de TIOBE para obtener el ranking de lenguajes.
   - Usa `jsdom` para analizar el HTML y extraer la posición, lenguaje y cambio en el ranking.

2. **obtenerRankingTecsify()**: 
   - Obtiene el ranking de lenguajes de Tecsify.
   - Extrae posición, lenguaje y porcentaje de uso usando `jsdom`.

3. **obtenerRankingPYPL()**: 
   - Extrae los datos del ranking PYPL.
   - Extrae información como posición, lenguaje, porcentaje de uso y tendencia usando `jsdom` .

4. **generarExcel()**: 
   - Crea un archivo Excel con columnas que combinan los rankings de TIOBE, Tecsify y PYPL.
   - Llena cada fila con la información obtenida de cada función de extracción.
   - Guarda el archivo Excel con el nombre `ranking_combinado.xlsx`.

## Análisis y Utilidad

Este proyecto permite a desarrolladores y analistas comparar en un solo archivo Excel los datos de popularidad de distintos lenguajes de programación, según tres fuentes relevantes. Al centralizar esta información en un archivo estructurado, facilita el análisis y seguimiento de la popularidad de los lenguajes en el tiempo, lo que puede ser útil para decisiones de negocio, capacitación y estrategia tecnológica.

