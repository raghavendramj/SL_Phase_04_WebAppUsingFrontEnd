function esacpeExample(){
    var stmt1 = 'My name is "Raghavendra"';
    var stmt2 = "My name is 'Raghavendra'";
    console.log(stmt1);
    console.log(stmt2);
}
// esacpeExample();

function indexMethods(){
    var str = "hello world";
    console.log("length :- ", str.length);
    console.log("indexOf :- ", str.indexOf("world"));
    str = "hello world hello javascript hello";
    console.log("lastIndexOf :- ", str.lastIndexOf("hello"));
    str=" I have visited delihi";
    console.log("lastIndexOf :- ", str.lastIndexOf("i"));
}

// indexMethods();

function subStringMethods(){
    var str = "my favorite country is India";
    //first param -> start, second -> end 
    console.log("str.substring(3, 11) -> ", str.substring(3, 11));

     //first param -> start, second -> length 
    console.log("str.substr(3, 11) -> ", str.substr(3, 11));
    console.log("str.substr(3, 8) -> ", str.substr(3, 8));
}

// subStringMethods();


function replaceMethods(){
    var str = "my favorite city is bangalore and bangalore is a nice place to hang out!";
    var out = str.replace(/bangalore/g, "kolkota");
    console.log("str.replace(/bangalore/g, 'kolkota')", out);
}

// replaceMethods();

function sliceMethods(){
    var str = "my favorite country is India";
    console.log("str.slice(12, 19) :- ", str.slice(12, 19));
}

sliceMethods();