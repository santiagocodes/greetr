<img height="80px" align="left" src="https://santiagocodes.github.io/santiagocodes/images/octocat-santiagocodes.png" alt="santiagocodes octocat" />

# GREETR Javascript Library

Following Udemy's Javascript: Understanding the Weird Parts (Building a Library/Framework).

## Official Requirements

-  When given a first name, last name, and optional language, it generates formal and informal greetings.

-  Support English and Spanish languages.

-  Reusable library/framework.

-  Easy to type `'G$()'` structure.

-  Support jQuery

## Our Object and Its Prototype

```javascript
(function (global, $) {
   var Greetr = function (firstName, lastName, language) {
      return new Greetr.init(firstName, lastName, language);
   };

   Greetr.prototype = {};

   Greetr.init = function (firstName, lastName, language) {
      var self = this;
      self.firstName = firstName || '';
      self.lastName = lastName || '';
      self.language = language || 'en';
   };

   Greetr.init.prototype = Greetr.prototype;

   global.Greetr = global.G$ = Greetr;
})(window, jQuery);
```

## Properties and Chainable Methods

```javascript
var supportedLangs = ['en', 'es'];

var greetings = {
   en: 'Hello',
   es: 'Hola',
};

var logMassages = {
   en: 'Logged In',
   es: 'Inicio Sesion',
};

var formalGreetings = {
   en: 'Greetings',
   es: 'Saludos',
};

Greetr.prototype = {
   fullName: function () {
      return this.firstName + ' ' + this.lastName;
   },
   validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
         throw 'Invalid language.';
      }
   },
   greeting: function () {
      return greetings[this.language] + ' ' + this.firstName + '!';
   },
   formalGreetings: function () {
      return formalGreetings[this.language] + ' ' + this.fullName();
   },
   greet: function (formal) {
      var msg;
      if (formal) {
         msg = this.formalGreetings();
      } else {
         msg = this.greeting();
      }

      if (console) {
         console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
   },
   log: function () {
      if (console) {
         console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      return this;
   },
   setLang: function (lang) {
      this.language = lang;
      this.validate();
      return this;
   },
};
```

```javascript
// app.js

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
```

## Adding jQuery Support

```javascript
HTMLGreeting: function (selector, formal) {

    if (!$) {
        throw 'jQuery not loaded';
    }

    if (!selector) {
        throw 'Missing jQuery selector';
    }

    var msg;

    if (formal) {
        msg = this.formalGreetings();
    } else {
        msg = this.greeting();
    }

    $(selector).html(msg);

    return this;
},
```

## Using the Framework

```javascript
// app.js

$('#login').click(function () {
   var loginGrtr = G$('John', 'Doe');

   $('#logindiv').hide();

   loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
```
