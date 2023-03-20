type TPerson = {
  firstName: string,
  lastName: string
};

type TPersonWithAge = TPerson & {age: number};

interface IPerson {
  firstName: string;
  lastName: string;
}

interface IPerson {
  age: number;
}

interface Child extends IPerson {}

function getFullNameInterface(person: IPerson): string {
  return `${person.firstName} ${person.lastName}`;
}

function getFullNameTypeAlias(person: TPerson): string {
  return `${person.firstName} ${person.lastName}`;
}

class User implements IPerson {
  firstName: string = '';
  lastName: string = '';
  age: number = 0;
}