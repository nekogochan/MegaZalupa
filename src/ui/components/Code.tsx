import {mdiContentCopy} from "@mdi/js";
import Icon from "@mdi/react";
import {default as HLJS} from "highlight.js";
import "highlight.js/styles/github.css";
import {useEffectOnce, useRemember} from "src/ui/ReactUtils";
import {generateUuid} from "src/util/CommonUtil";
import "./styles/Code.scss";

type CodeProps = {
    code: string,
    name?: string,
    lang?: string
}

HLJS.configure({
    ignoreUnescapedHTML: true
});

export function Code({code, name, lang}: CodeProps) {

    const id = useRemember(generateUuid);
    const copyCode = () => navigator.clipboard.writeText(code);

    useEffectOnce(() => {
        const codeElement = document.getElementById(id) as HTMLElement;
        HLJS.highlightElement(codeElement);
    });

    return <div className={"Code"}>
        <h4 className={"code-name"}>
            {name} <a href={"#"} onClick={copyCode}><Icon className={"copy-icon"} path={mdiContentCopy} size={0.7}/></a>
        </h4>
        <pre><code id={id} className={lang ?? ''}>{code}</code></pre>
    </div>;
}