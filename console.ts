class Person {
    name: string;
    title: string;
    location: string;
    experience: number;
    age: number;

    constructor(name: string, title: string, location: string, experience: number, age: number) {
        this.name = name;
        this.title = title;
        this.location = location;
        this.experience = experience;
        this.age = age;
    }
}

class ConsoleExample {
    log() {
        console.log('This is a simple log!');
    }

    warn() {
        console.warn('This is a WARNING! Whatever you did, I don\'t appreciate it');
    }

    info() {
        console.info('This is informational only...');
    }

    error() {
        console.error('Something broke!');
        console.error({ 'asd': 'asd' });
    }

    assert() {
        console.assert(false, 'This should never have happened!');
    }

    table() {
        var array = [{ 'developer': 'Justin', 'codeName': 'tree trimmer' },
            { 'developer': 'Michael', 'codeName': 'pepper slicer' },
            { 'developer': 'Ava', 'codeName': 'sidewalk' }]

        console.table(array);
    }

    trace(level?: number) {
        if (typeof (level) === 'object') {
            example.trace(0);
        } else {
            if (level < 8) {
                example.trace(++level)
            } else {
                console.trace();
            }

        }
    }

    isGrouping: boolean;
    group() {
        example.isGrouping = !example.isGrouping;

        if (example.isGrouping) {
            console.group('MyGroup');
        } else {
            console.groupEnd();
        }
    }

    profile() {
        console.profile();
        var people: Array<Person> = new Array<Person>(10000000);
        for (var i = 0; i < 10000000; i++) {
            people[i] = new Person("a", "b", "c", 1, 2);
        }

        for (var i = 0; i < 10000000; i++) {
            people[i] = new Person("a", "b", "c", 1, 2);
        }
        console.profileEnd();
    }
    
    timing(){
        console.time('MyTimer');
        for(var i = 0; i < 200000000; i++){
            
        }
        console.timeEnd('MyTimer');
    }
    
    count(){
        for(var i = 0; i < 20; i++){
            if(i % 2 == 0) console.count('EvenCounter');
            console.count('NumberCounter');
        }
    }

    toggleAllBlur() {
        var blurredElements = document.querySelectorAll(".blur");
        if (blurredElements.length === 0) {
            var examples = document.querySelectorAll(".column.example");
            for (var i = 0; i < examples.length; i++) {
                examples[i].classList.add("blur");
            }
        } else {
            for (var i = 0; i < blurredElements.length; i++) {
                blurredElements[i].classList.remove("blur");
            }
        }

    }
    
    makeAjaxCall(){
        jQuery.ajax({
    url: "http://query.yahooapis.com/v1/public/yql",
 
    jsonp: "callback",
 
    dataType: "jsonp",
 
    data: {
        q: "select title,abstract,url from search.news where query=\"cat\"",
        format: "json"
    },
 
    success: function( response ) {
        console.log( response );
    }
});
    }

}

var example = new ConsoleExample();
document.getElementById("log").onclick = example.log;
document.getElementById("warn").onclick = example.warn;
document.getElementById("info").onclick = example.info;
document.getElementById("error").onclick = example.error;
document.getElementById("assert").onclick = example.assert;
document.getElementById("table").onclick = example.table;
document.getElementById("egg").onclick = example.toggleAllBlur;
document.getElementById("trace").onclick = example.trace;
document.getElementById("group").onclick = example.group;
document.getElementById("profile").onclick = example.profile;
document.getElementById("timing").onclick = example.timing;
document.getElementById("count").onclick = example.count;

var examples = document.querySelectorAll('.column.example');

for (var i = 0; i < examples.length; i++) {
    (<HTMLElement>examples[i]).onclick = function(e) {
        var actives = document.querySelectorAll(".active");
        for (var j = 0; j < actives.length; j++) {
            (<HTMLElement>actives[j]).classList.toggle("active");
        }

        (<HTMLElement>this).classList.toggle('active');
    }
}

var team = {};
team.lead = new Person("Dave", "Lead Dev Guy", "Houston", 14, 41);
team.architect = new Person("Lori", "Lead Architect", "Austin", 11, 38);
team.intern = new Person("Shane", "Intern", "Dallas", 0, 19);
team.developer = new Person("Jack", "Senior Dude", "San Antonio", 8, 33);
team.developer.dogName = "Justin";

window.team = team;