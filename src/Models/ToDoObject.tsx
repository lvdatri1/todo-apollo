export class ToDoObject {
    name: string;
    id: number;
    status: boolean;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.status = false;
    }
}
export class ToDoListObject {
    list: ToDoObject[];
    constructor() {
        console.log('hello from new todo list');
        this.list = [new ToDoObject('hello 1', 1)];
    }
    getAllToDos() {
        return this.list;
    }
    addNewToDo(name: string) {
        const i = this.list.length;
        const item = new ToDoObject(name, i);
        this.list.push(item);
    }

};