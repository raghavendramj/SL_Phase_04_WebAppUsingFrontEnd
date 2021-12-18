function printValues(){
    console.log("1");
    setTimeout(function(){
          console.log("2");
     }, 0);
     setTimeout(function(){
          console.log("3");
     }, 1000);
    console.log("4");   
 
 }
 printValues();


 function testSetTimeOut(){
    for(var i=0; i<5; i++){
        setTimeout(
            function(){
                console.log(i);
            }, 
            1000
        );
    }
}

testSetTimeOut();

function iifeFix(){

    for(var i=0; i<5; i++){
      (function(j){
             setTimeout(
                   function(){
                       console.log(j);
                   }, 
                   1000
              );
       })(i);     
   }
}


iifeFix();

function letHoistTest(){

    console.log(x);
    let x;
    x = 10;
}

letHoistTest();