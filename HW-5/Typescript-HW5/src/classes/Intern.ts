import { InternType } from '../types';

export default class Intern implements InternType {
  age: number = 0;
  name: string = '';
  role: string = '';
  resume: string = '';
  mentor: string = '';
}
