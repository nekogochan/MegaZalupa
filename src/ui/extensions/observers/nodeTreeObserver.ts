type Listener = <T extends HTMLElement>(node: T) => void;

class NodeTreeObserver {
    private listeners = new Map<string, Listener[]>();

    private nodeTreeObserver = new MutationObserver((mutations) => {
        mutations.forEach(({addedNodes}) => {
            addedNodes.forEach((node) => {
                this.handleSingleElement(node);
            });
        });
    });

    private handleSingleElement(node: Node) {
        let asElement = node as HTMLElement;
        if (asElement.classList !== undefined) {
            for (let [cssClass, fns] of this.listeners) {
                if (asElement.classList.contains(cssClass)) {
                    fns.forEach(fn => fn(asElement));
                    break;
                }
            }
        }
        if (asElement.children !== undefined) {
            for (let child of asElement.children) {
                this.handleSingleElement(child);
            }
        }
    }

    start() {
        this.nodeTreeObserver.observe(document, {
            childList: true,
            subtree: true
        });
    }

    stop() {
        this.nodeTreeObserver.disconnect();
    }

    listenForCssClass(cssClass: string, fn: Listener) {
        let arr = this.listeners.get(cssClass);
        if (arr === undefined) {
            arr = [];
            this.listeners.set(cssClass, arr);
        }
        arr.push(fn);
    }
}

export const nodeTreeObserver = new NodeTreeObserver();
