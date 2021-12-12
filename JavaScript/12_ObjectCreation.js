//1st Way to create object -> Factory function!
function createCircle(raduis) {
  return {
    raduis,
    draw: function () {
      console.log("Factory function! - draw");
    },
  };
}
var factCircle = createCircle(1);
factCircle.draw();


function Circle(raduis){
    console.log('this', this);
    this.raduis = raduis;
    this.draw = function(){
        console.log("Circle -> onstructor function - draw!");
    }
}

var anotherCircle = new Circle(1);
//1. -> new operatir -> create a empty object
//2 -> it will set this to point to that current object
//3. returns the object from the function.  
// => happens automatically!


function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.getDetails = function(){
        return this.name + " by "+ this.author +" published in year "+ this.year;
    }    
}

var book = new Book("Angels and Demons", "Dan Brown", "2000");
book.getDetails();


function Employee(id, fname, lname, city){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.city = city;
    this.fullName = function() {
        return this.fname + " "+ this.lname;
    }    
}
var employee = new Employee(1, 'raghav', 'mj', 'bangalore');
