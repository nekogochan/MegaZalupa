import "/src/ui/pages/SomeReactShit.scss";
import React, {useState} from "react";
import {Await} from "react-router-dom";

function component<T extends { [key in S]: C }, S extends string, C extends () => React.ReactElement>(name: S)
    : () => Promise<() => React.ReactElement> {
    return async () => (await import(`./some-react-shit/${name}`) as T)[name];
}

const componentsMap: {
    [key in string]: () => Promise<() => JSX.Element>
} = {
    "Ticker with bad 'remember' hook": component("UseRememberExample"),
}

export function SomeReactShit() {
    const [currentComponentName, setCurrentComponentName] = useState(Reflect.ownKeys(componentsMap)[0].toString());
    const currentComponent = componentsMap[currentComponentName];

    return <div className={"SomeReactShit"}>
        {/*<aside>*/}
        {/*    <ul>*/}
        {/*        {Reflect.ownKeys(componentsMap).map(x => x.toString()).map(name => <li key={name}>*/}
        {/*            <button className={"btn"} onClick={() => setCurrentComponentName(name)}>{name}</button>*/}
        {/*        </li>)}*/}
        {/*    </ul>*/}
        {/*</aside>*/}
        <div className={"content"}>
            <React.Suspense fallback={<p>loading</p>}>
                <Await resolve={currentComponent()} errorElement={<p>FUCK</p>} children={x => x()}/>
            </React.Suspense>
        </div>
    </div>
}
