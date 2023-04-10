import {observable} from "mobx";
import {TodoStore} from "src/core/state/some-react-shit/TodoStore";
import {SingleProp} from "src/ui/ReactUtils";

const TodoInternal = observable(({store}: SingleProp<TodoStore, "store">) => {
    return <>
        <button onClick={() => store.addTask()}></button>
        {store.tasks.map((task, i) => <div key={`task-input-${i}`}>
            <input value={task.name} onChange={ev => task.name = ev.target.value}/>
            <input type={"checkbox"} checked={task.completed} onChange={ev => task.completed = ev.target.checked}/>
        </div>)}
        <i>{store.footer}</i>
    </>
});

export function Todo() {
    return <></>
}
