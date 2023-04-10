import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "src/ui/App";
import {AppConfig} from "src/ui/AppConfig";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(AppConfig(App))
