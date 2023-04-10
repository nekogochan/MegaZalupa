import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import "src/ui/App.scss";
import {Index} from "src/ui/pages/Index";
import {SomeReactShit} from "src/ui/pages/SomeReactShit";

export function App() {
    return <div className={"App"}>
        <nav className={"nav"}>
            <ul>
                <li><NavLink to={'/'} className={'nav-link'}>Домой</NavLink></li>
                <li><NavLink to={'/some-react-shit'} className={'nav-link'}>Всякая хуетень на реакте</NavLink></li>
            </ul>
        </nav>
        <main className={"main"}>
            <Routes>
                <Route index element={<Index/>}/>
                <Route path={'/some-react-shit'} element={<SomeReactShit/>}/>
            </Routes>
        </main>
    </div>
}
