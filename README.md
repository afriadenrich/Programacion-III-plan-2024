# Programacion-III-plan-2024

## Clase 01

### Introducción HTML
    - Tags
    - Atributos

## Clase 02

### Introducción CSS
    - Selectores
    - Propiedades
    - Flexbox
    - Margin, padding, border 

## Documentación CSS

- [Punto de partida](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics)


## Clase 03

### CSS
    - Fuentes y atributos relacionados
    - Pseudoclases: hover, focus, nth-child


## Clase 04

### CSS
    - Grid
    - Media Queries

## Clase 05

### Javascript
    - Variables
    - Tipos de datos
    - Objetos y Clases
    - Métodos de strings y arrays
    - Callbacks

### Documentación importante

- [Palabras clave y otras expresiones](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators)
- [Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions)
- [Objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects)
- [Arrays](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)


## Clase 06

### Javascript
    - Map
    - Set
    - Spread Operator
    - POO
    - Separación de archivos por módulos

### Documentación importante:

- [Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [Arrow Functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Spread Operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Colecciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Keyed_collections)

## Clase 07

### Javascript - DOM
    - localstorage
    - DOM
    - getElementById
    - onclick
    - addEventListener
    - innerHTML vs innerText

### Documentación importante:

- [localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [DOM](https://developer.mozilla.org/es/docs/Glossary/DOM)
- [getElementById](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)
- [onclick](https://www.w3schools.com/jsref/event_onclick.asp)
- [innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
- [innerHTML vs innerText](https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/)

## Clase 08

### Bootstrap
    - Bootstrap
    - Grid con bootstrap
    - Flex con bootstrap
    - Container
    - Responsive
    - Temas (claro / oscuro)

### Documentación importante
- [Descargar bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/)
- [Containers](https://getbootstrap.com/docs/5.3/layout/containers/)
- [Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
- [Temas](https://getbootstrap.com/docs/5.3/customize/color-modes/#dark-mode)
- [Difenrecia align items vs align content](https://es.stackoverflow.com/questions/231406/flexbox-diferencia-align-items-y-align-content)
- [Operador ternario JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

## Clase 12 


## Clase 13


## Clase 14
### Modelo parcial

# Clase 15
### Parcial

# Clase 16
## Node y Express


# Clase 17
## Ruteo y MVC

# Clase 18
## Conexión a DB con Sequelize

### Importante - Deshabilitar CORS

````
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
