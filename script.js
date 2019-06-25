var date = new Date();
document.body.innerHTML = "<h1>Today is " + date + "</h1>";

function Course(title, instructor, level, published, views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;

    //Using an anonymous inline function for this!
    this.updateViews = function(){
        return ++this.views;
    };
}

var course01 = new Course("JS Essential Training","Travis Aubrey", 1, true, 0);
var course02 = new Course("Up and running with ECMAscript 6", "Mathew Mathiason", 2, true, 12345);

document.body.innerHTML += "<p>" + course01.instructor + "</p>";
console.log(course01);
console.log(course02);