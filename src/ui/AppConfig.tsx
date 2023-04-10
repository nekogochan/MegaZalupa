import React from "react";
import {BrowserRouter} from "react-router-dom";
import "src/ui/global-styles/__all.scss";
import "src/ui/extensions/observers/ripple-effect";
import "src/ui/extensions/observers/pretty-print";
import "code-prettify-google";
import {nodeTreeObserver} from "src/ui/extensions/observers/nodeTreeObserver";

export const AppConfig = (app: () => React.ReactNode) => (
    <React.StrictMode>
        <BrowserRouter>
            {app()}
        </BrowserRouter>
    </React.StrictMode>
);

nodeTreeObserver.start();
