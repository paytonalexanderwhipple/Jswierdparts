(function(global, $) {
  // 'new' Greetr object
  const Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };
  // hidden here to let us know which languages we have entered
  const supportedLanguages = ["en", "es"];

  const greetings = {
    en: "Hello",
    es: "Hola"
  };

  const formalGreetings = {
    en: "Greetings",
    es: "Saludos"
  };

  const logMessages = {
    en: "Logged in",
    es: "Inicio sesion"
  };

  Greetr.prototype = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },

    validate: function() {
      if (!supportedLanguages.includes(this.language)) {
        throw "Language not supported";
      }
    },

    greeting: function() {
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ", " + this.fullName();
    },

    greet: function(formal) {
      let msg;

      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      return this;
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }
      return this;
    },

    setLang: function(newLang) {
      console.log("fired");
      this.language = newLang;

      this.validate();

      console.log(this);

      return this;
    },

    jQupdate: function(selector, formal) {
      if (!$) {
        throw "jQuery not loaded";
      }

      if (!selector) {
        throw "not selector specified";
      }

      let msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      document.querySelector(selector).innerText = msg;

      return this;
    }
  };

  Greetr.init = function(firstName, lastName, language) {
    const self = this;

    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "es";

    self.validate();
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
