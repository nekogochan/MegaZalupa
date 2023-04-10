declare global {
    interface Object {
        toDebugStr(): string
    }
}

export function debug(obj: object) {
    const objectInfo = "{" + Object.entries(obj).map(([k, v]) => `${k}: ${v}`).join(", ") + "}";
    const proto = Reflect.getPrototypeOf(obj) as { constructor?: { name?: string } };
    const protoName = proto?.constructor?.name;
    const debugStr = protoName && protoName !== 'Object' ? `${protoName} ${objectInfo}` : objectInfo;
    console.log(debugStr);
}
