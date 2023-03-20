function log<T, U = T>(input: T): U {
  console.log(`value: ${input}`);
  return input as unknown as U;
}

const g1 = log<string>('Hallo');
const g2 = log<number, number>(42);

type ThingsWithId = {
  id: number;
}

class Collection<T extends ThingsWithId> {
  private items: T[] = [];

  constructor(initialValues: T[] = []) {
    this.items = initialValues;
  }

  addItem(item: T): T[] {
    this.items.push(item);
    return this.items;
  }

  getById(id: number): T {
    const result: T | undefined = this.items.find(item => item.id === id);
    if (result === undefined) {
      throw new Error('Not found')
    }
    return result;
  }

  getItem(index: number): T {
    return this.items[index];
  }
}

type People = {
  id: number,
  firstName: string
}

const numberCollection = new Collection<People>([{id: 1, firstName: 'Klaus'}]);
console.log(numberCollection.getItem(0));
numberCollection.addItem({id: 2, firstName: 'Lisa'});
console.log(numberCollection.getItem(1));