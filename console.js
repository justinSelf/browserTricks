var ConsoleExample = (function () {
    function ConsoleExample() {
    }
    ConsoleExample.prototype.log = function () {
        console.log('This is a simple log!');
    };
    ConsoleExample.prototype.warn = function () {
        console.warn('This is a WARNING! Whatever you did, I don\'t appreciate it');
    };
    ConsoleExample.prototype.info = function () {
        console.info('This is informational only...');
    };
    ConsoleExample.prototype.error = function () {
        console.error('Something broke!');
        console.error({ 'asd': 'asd' });
    };
    ConsoleExample.prototype.assert = function () {
        console.assert(false, 'This should never have happened!');
    };
    ConsoleExample.prototype.table = function () {
        var array = [{ 'developer': 'Justin', 'codeName': 'tree trimmer' },
            { 'developer': 'Michael', 'codeName': 'pepper slicer' },
            { 'developer': 'Ava', 'codeName': 'sidewalk' }];
        console.table(array);
    };
    return ConsoleExample;
})();
var example = new ConsoleExample();
document.getElementById("log").onclick = example.log;
document.getElementById("warn").onclick = example.warn;
document.getElementById("info").onclick = example.info;
document.getElementById("error").onclick = example.error;
document.getElementById("assert").onclick = example.assert;
document.getElementById("table").onclick = example.table;
//# sourceMappingURL=console.js.map