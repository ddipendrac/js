const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java"]

for (const num in programming) {
    // console.log(programming[num]);
    
}

const map =  new Map()

map.set('IN', "India")
map.set('US', "United State of America")
map.set('FR', "France")
map.set('FR', "France")  // Can not print

for (const key in map) {
    // console.log(key); // Not possible
}