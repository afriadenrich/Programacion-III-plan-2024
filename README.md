# Programacion-III-plan-2024

## Clase 01

### Introducción HTML
    - Tags.
    - Atributos.

## Clase 02

### Introducción CSS
    - Selectores.
    - Propiedades.
    - Flexbox.
    - Margin, padding, border.

## Documentación CSS

- [Punto de partida](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics)


## Clase 03

### CSS
    - Fuentes y atributos relacionados.
    - Pseudoclases: hover, focus, nth-child.

## Clase 04

### CSS
    - Grid.
    - Media Queries.

## Clase 05

### Javascript
    - Variables.
    - Tipos de datos.
    - Objetos y Clases.
    - Métodos de strings y arrays.
    - Callbacks.

### Documentación importante

- [Palabras clave y otras expresiones](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators)
- [Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions)
- [Objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects)
- [Arrays](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)


## Clase 06

### Javascript
    - Map.
    - Set.
    - Spread Operator.
    - POO.
    - Separación de archivos por módulos.

### Documentación importante:

- [Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [Arrow Functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Spread Operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Colecciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Keyed_collections)

## Clase 07

### Javascript - DOM
    - localstorage.
    - DOM.
    - getElementById.
    - onclick.
    - addEventListener.
    - innerHTML vs innerText.

### Documentación importante:

- [localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [DOM](https://developer.mozilla.org/es/docs/Glossary/DOM)
- [getElementById](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)
- [onclick](https://www.w3schools.com/jsref/event_onclick.asp)
- [innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
- [innerHTML vs innerText](https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/)

## Clase 08

### Bootstrap
    - Bootstrap.
    - Grid con bootstrap.
    - Flex con bootstrap.
    - Container.
    - Responsive.
    - Temas (claro / oscuro).

### Documentación importante
- [Descargar bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/)
- [Containers](https://getbootstrap.com/docs/5.3/layout/containers/)
- [Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
- [Temas](https://getbootstrap.com/docs/5.3/customize/color-modes/#dark-mode)
- [Difenrecia align items vs align content](https://es.stackoverflow.com/questions/231406/flexbox-diferencia-align-items-y-align-content)
- [Operador ternario JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

## Clase 9
### Repaso / Preparación del TP.

## Clase 10
### Asincronismos
- async / await
- Promesas, .then(), .catch(), .finally().
- fetch().

### Documentación importante
- [async y await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [Uso de fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- [fetch()](https://developer.mozilla.org/es/docs/Web/API/Window/fetch)
- [Fetch para principiantes](https://www.freecodecamp.org/espanol/news/javascript-fetch-api-para-principiantes/)

## Clase 11
### Pérdida de clases

## Clase 12 
### Manejo de formularios
- <form></form>.
- Validaciones HTML.
- Fetch con Query params.

### Documentación importante
- [Etiqueta form](https://developer.mozilla.org/es/docs/Web/HTML/Element/form)
- [Validaciones de formularios](https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation)
- [fetch con query params](https://dev.to/sanjampreetsingh/simplifying-api-calls-with-urlsearchparams-and-fetch-8gn)

## Clase 13
### Paquetes de node en frontend
- Instalar Node.
- Utilizar paquetes de Node.

### Modelo parcial

## Clase 14
### Feriado

## Clase 15
### Primer Parcial

## Clase 16
### Node y Express
- Instalar Node.
- Utilizar paquetes de Node.
- Instalar express.
- Testing con Nodemon.
- Crear las primeras rutas.
- Pareseo del Body.

### Documentación importante
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Instalar express](https://expressjs.com/en/starter/installing.html)
- [Primeras rutas](https://expressjs.com/en/starter/hello-world.html)
- [Ruteo básico](https://expressjs.com/en/starter/basic-routing.html)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Clase 17
### Ruteo y MVC
- Distintas opciones de ruteo con Node.
- Patrón MVC para estructuración de proyectos.

### Documentación importante
- [Ruteo avanzado](https://expressjs.com/en/guide/routing.html)
- [Api reference](https://expressjs.com/en/5x/api.html)
- [MVC](https://medium.com/@jonoyanguren/mvc-pattern-in-nodejs-and-express-old-but-gold-46c21bee365a)

## Clase 18
### Conexión a DB con ORM (Sequelize)

### Documentación importante
- [Sequelize](https://sequelize.org/)
- [Instalar Sequelize](https://sequelize.org/docs/v6/getting-started/)
- [Modelado de entidades](https://sequelize.org/docs/v6/core-concepts/model-basics/)
- [Sentencias preparadas (Queries)](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)


### Importante - Deshabilitar CORS

```
    // Deshabilitar cors
    app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    next();
    });
```

## Clase 19
### Relaciones en la DB
- [Relaciones con Sequelize](https://sequelize.org/docs/v6/core-concepts/assocs/)

## Clase 19 
### EJS


## Clase 20 
### Manejo y subida de archivos


## Clase 21 
### Middlewares


## Clase 22 
### Descarga de PDF / Excel

https://www.npmjs.com/package/pdf-lib
https://developer.mozilla.org/es/docs/Web/HTTP/MIME_types/Common_types
https://docs.sheetjs.com/docs/demos/net/server/express/
https://expressjs.com/en/5x/api.html#res.sendFile
https://expressjs.com/en/5x/api.html#res.attachment
https://www.npmjs.com/package/xlsx

## Fechas que nos quedan:
- 27/11 - Segundo Parcial
- 29/11 - Entrega del TP
- 4/12 - Recuperatorio PP
- 6/12 - Recuperatorio SP
- 6/12 - Se puede reentregar el TP
- 6/12 Última fecha para promocionar la materia
- En la semana de finales del 9 al 14 de diciembre: Última semana para aprobar la maeteria y el TP.

# Links a ordenar

https://restfulapi.net/http-methods/

https://github.com/mde/ejs/wiki/Using-EJS-with-Express