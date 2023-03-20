enum Fruit {
  Apple = 4,
  Pear,
  Pineapple = 7
};

function eat(what: Fruit): void {
  console.log(`Eat ${what}`);
}

eat(Fruit.Apple);

function eatNamed(what: Fruit): void {
  console.log(`Eat named: ${Fruit[what]}`);
}

eatNamed(Fruit.Pineapple);
function compute() {
  return 2;
}
enum Veggy {
  Tomatoes = compute(),
  Cucumber = 'Cucumber',
  Potato = 'Potato'
}

function fry(what: Veggy): void {
  console.log(`Fry ${what}`);
}

fry(Veggy.Cucumber);
fry(Veggy.Tomatoes);

type Animals = 'Sheep' | 'Cow' | 'Pig';

function feed(what: Animals) {
  console.log(`feed: ${what}`);
}

feed('Pig');

function doSomthingWithAnimals(what: Animals) {
  switch (what) {
    case 'Cow':
      console.log(what);
      break;
  }
}


function doSomthingWithFruit(what: Fruit) {
  switch (what) {
    case Fruit.Apple:
      console.log(Fruit[what]);
      break;
  }
}