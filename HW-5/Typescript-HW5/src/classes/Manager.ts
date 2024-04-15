import { checkLength } from '../decorators/checkLength';
import { ManagerType } from '../types';

export default class Manager implements ManagerType {
  age: number = 0;
  @checkLength(3)
  name: string = '';
  role: string = '';
  department: string = '';
  expierence: number = 0;
}
