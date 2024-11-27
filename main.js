var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si puedes imaginarlo, puedes crearlo!')
    .pauseFor(2500)
    // número de Caracteres que se borrarán
    .deleteChars(8)
    .typeString('<strong>programarlo!</strong>')
    .pauseFor(2500)
    .start();
