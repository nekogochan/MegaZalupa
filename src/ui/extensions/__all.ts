const fs = require("fs");

fs.readdir(`${__dirname}/observers`, (err: any, files: string[]) => {
    if (err) {
        console.log(err);
    } else {
        files.forEach((x: string) => {
            const module = `${__dirname}/observers/${x}.js`;
            import(module);
        });
    }
});

export let nothing = null;
