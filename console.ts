class  ConsoleExample{
    log(){
        console.log('This is a simple log!');
    }
    
    warn(){
        console.warn('This is a WARNING! Whatever you did, I don\'t appreciate it');
    }
    
    info(){
        console.info('This is informational only...');
    }
    
    error(){
        console.error('Something broke!');
        console.error({'asd':'asd'});
    }
    
    assert(){
        console.assert(false, 'This should never have happened!');
    }
    
    table(){
        var array = [{'developer': 'Justin', 'codeName': 'tree trimmer'},
                     {'developer': 'Michael', 'codeName': 'pepper slicer'},
                     {'developer': 'Ava', 'codeName': 'sidewalk'}]
        
        console.table(array);
    }
}

var example = new ConsoleExample();
document.getElementById("log").onclick = example.log;
document.getElementById("warn").onclick = example.warn;
document.getElementById("info").onclick = example.info;
document.getElementById("error").onclick = example.error;
document.getElementById("assert").onclick = example.assert;
document.getElementById("table").onclick = example.table;