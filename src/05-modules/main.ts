import Person, {greet as sayHello} from "./person";
const klaus = new Person();
klaus.firstName = 'KLaus';
klaus.lastName = 'Müller';

sayHello(klaus);