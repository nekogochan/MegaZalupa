import {computed, makeObservable, observable} from "mobx";

export type Todo = {
    completed: boolean,
    name: string
}

export class TodoStore {
    tasks: Todo[] = [];

    constructor() {
        makeObservable(this, {
            tasks: observable,
            completed: computed,
            footer: computed
        });
    }

    get footer() {
        const firstUncompleted = this.tasks.find(x => !x.completed);
        return firstUncompleted === undefined
            ? 'All tasks completed'
            : `Next task: ${firstUncompleted.name}`;
    }

    get completed() {
        return this.tasks.filter(x => x.completed);
    }

    addTask() {
        this.tasks.push({
            name: 'new task',
            completed: false
        });
    }
}

export const todoStore = new TodoStore();