var g = G$('John', 'Doe');
g.greet();
// console output: Hello John!

var g = G$('John', 'Doe');
g.greet().greet(true);
// console output: Greetings, John Doe.

var g = G$('John', 'Doe');
g.greet().setLang('es').greet(true);
// console output: Saludos, John Doe.

var g = G$('John', 'Doe');
g.greet().setLang('fr').greet(true);
// console output: Uncaught Invalid language
