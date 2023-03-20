type Base = {
  vin: string,
  tires: number,
  power: 'electric' | 'petrol' | 'diesel'
}

type Vehicle = Base & {id: number};
type NewVehicle = Base & {id?: number};

type Car = {
  id: number,
  vin: string,
  tires: number,
  power: 'electric' | 'petrol' | 'diesel'
}
type NewCar = Omit<Car, 'id'> & {id?: number}

function update(car: Car): Car {
  // do magic things
  return car;
}

function create(car: NewCar): Car {
  return {...car, id: Math.random()}
}




interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
type RecordThingy = Record<CatName, CatInfo>;
// type RecordThingy = {[key: string]: CatInfo};

const cats:  RecordThingy= {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};


const foo2: string = 'bar';
console.log(typeof foo2);

class Person22 {}
const klaus22 = new Person22();
console.log(typeof klaus22);
console.log(Array.isArray([]));