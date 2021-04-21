import {ToDos} from '../Global/GlobalStates';

export function AddToDo(item:string){
var x: string[];
x=ToDos();
x.push(item);
ToDos(x);
}

