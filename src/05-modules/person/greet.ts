import Person from './person'

function getFullName(person:Person): string {
  return `${person.firstName} ${person.lastName}`;
}

export function greet(person: Person): void {
  console.log(`Hello ${getFullName(person)}`);
}