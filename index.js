console.log("Hello World 1");

setTimeout(() => {
    console.log("Hello World 2");
}, 0);

setImmediate(() => {
    console.log("Hello World 3");
});

process.nextTick(() => {
    console.log("Hello world nextTick")
    setTimeout(() => {
        console.log("Hello World 4");
    }, 0);
    
    setImmediate(() => {
        console.log("Hello World 5");
    });
});









