function Animal() {
  this.barulho = "barulho"
};

Animal.prototype = {
  fazerBarulho: function () {
    return this.barulho;
  }
};

function Cao() {
  this.barulho = "Au";
};

Cao.prototype = new Animal();

function Gato() {
  this.barulho = "Miau";
};

Gato.prototype = new Animal();

function Manada() {
  this.animais = [];
};

Manada.prototype = {
  adicionar: function (animal) {
    this.animais.push(animal);
    return console.log("Animal adicionado");
  }
};

function ManadaVirgula() {
  Manada.call(this);
};

ManadaVirgula.prototype = new Manada();
ManadaVirgula.prototype.barulhos = function () {
  barulho = [];
  this.animais.forEach(function (animal) {
    barulho.push(animal.fazerBarulho());
  });
  return barulho.join(", ");
};

function ManadaSustenidaDupla() {
  Manada.call(this);
}

ManadaSustenidaDupla.prototype = new Manada();
ManadaSustenidaDupla.prototype.barulhos = function () {
  barulho = [];
  this.animais.forEach(function (animal) {
    barulho.push(animal.fazerBarulho());
  });
  return barulho.concat(barulho).sort().join("# ");
}



var manada = new Manada();
var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenidaDupla();
var animais = [new Cao(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
manadaSustenidaDupla.adicionar(animal);
});



// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());
