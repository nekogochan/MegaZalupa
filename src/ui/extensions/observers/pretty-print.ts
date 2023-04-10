import {nodeTreeObserver} from "./nodeTreeObserver";
import "./styles/prettyprint.min.css";

nodeTreeObserver.listenForCssClass("prettyprint", () => eval("PR.prettyPrint()"));
