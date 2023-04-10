import {useEffect, useMemo, useState} from "react";

export type HtmlProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

export type SingleProp<T, K extends string> = {
    [key in K]: T
}

export function useExecuteAsync<T>(fn: () => Promise<T>): [T, boolean, any] {
    const [data, setData] = useState<T>(null as T);
    const [error, setError] = useState<any>(null);

    useEffectOnce(() => {
        fn().then(setData)
            .catch(setError)
    });

    return [data, error, data !== null];
}

export function useEffectOnce(fn: () => any) {
    useEffect(fn, []);
}

export function useRemember<T>(valueProvider: () => T) {
    return useMemo(valueProvider, []);
}