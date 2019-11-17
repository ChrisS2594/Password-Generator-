let password = document.getElementById("password");

let generate = document.getElementById("generate");
    generate.addEventListener("click", generate())

let upperletterarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let lowerletterarray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
let unicodearray = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027','\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E']
    
let integerarray =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
   
   
   
   
   
   
   
   
   
   
   
   
    function generate(upperletterarray , lowerletterarray , unicodearray , integerarray){ 
        return placeholder = upperletterarray[Math.floor(Math.random() * upperletterarray.length) ] + lowerletterarray[Math.floor(Math.random() * lowerletterarray.length)] +
        unicodearray[Math.floor(Math.random() * unicodearray.length)] + integerarray[Math.floor(Math.random() * integerarray.length)];
    };
    console.log("generate");
    document.getElementById("password").innerHTML = myFunction("generate");






