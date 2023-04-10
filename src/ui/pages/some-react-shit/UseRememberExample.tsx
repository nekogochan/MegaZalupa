import random from "random";
import React, {useMemo, useState} from "react";
import {Code} from "src/ui/components/Code";
import {GroupBox} from "src/ui/components/GroupBox";
import "./styles/UseRememberExample.scss";
import {useRemember} from "src/ui/ReactUtils";
import {debug} from "src/util/Debug";

function useBadRemember<T>(valueProvider: () => T) {
    const [state] = useState(valueProvider());
    return state;
}

class RandomIntProvider {
    private constructor(public name: string) {
    }

    private static container: Map<string, RandomIntProvider> = new Map();

    static byName(name: string): RandomIntProvider {
        let provider = RandomIntProvider.container.get(name);
        if (provider === undefined) {
            provider = new RandomIntProvider(name);
            RandomIntProvider.container.set(name, provider);
        }
        return provider;
    }

    executions = 0;

    next() {
        this.executions++;
        debug(this);
        return random.int(0, 100);
    }
}

function TickerWithDefaultParameter() {
    const initValue = useRemember(() => RandomIntProvider.byName("default-param").next());
    const [count, setCount] = useState(initValue);
    const increment = () => setCount(i => i + 1);

    return <div className={"Ticker"}>
        <div className={"h-box"}>
            <button className={"btn"} onClick={increment}>Click me</button>
            <b>{count}</b>
        </div>
    </div>
}

export function UseRememberExample() {
    return <div className={"UseRememberExample"}>
        <section>
            <h3>Проблема</h3>
            <p>
                Давайте представим, что мы хотим при создании компонента "навсегда", до его "смерти" вычислить
                какое-то значение и хранить его внутри этого компонента. Таким образом компонент с рождения и до
                самой смерти будет связан с какими-то определенными данными. Примерами таких данных могут быть
                вычисляемые значения типа генерируемых ID для последующей обработки или случайные значения,
                получаемые в результате выполнения функции
            </p>
        </section>
        <section>
            <h3>Возможное решение</h3>
            <p>
                В качестве одного из решений может подойти использование <a target={"_blank"}
                                                                            href={"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters"}>
                параметра по умолчанию</a>. Пример:
            </p>
            <Code name={"Default parameter example"}
                  code={`function TickerWithDefaultParameter(props: {}, initValue = new RandomIntProvider("default-param").next()) {
    const [count, setCount] = useState(initValue);
    const increment = () => setCount(i => i + 1);

    return <div className={"Ticker"}>
        <div className={"data-grid-2c"}>
            <p>count:</p><p>{count}</p>
        </div>
        <button onClick={increment}>Click me</button>
    </div>
}`}/>
            <p>А теперь посмотрим, что получилось:</p>
            <GroupBox header={"Ticker with default parameter"}>
                <TickerWithDefaultParameter/>
            </GroupBox>
        </section>
    </div>
}