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
      return new Greeter.init(firstName, lastName, language);
   };

   Greetr.prototype = {};

   Greeter.init = function (firstName, lastName, language) {
      var self = this;
      self.firstName = firstName || '';
      self.lastName = lastName || '';
      self.language = language || 'en';
   };

   Greetr.init.prototype = Greetr.prototype;

   global.Greetr = global.G$ = Greetr;
})(window, jQuery);
```
