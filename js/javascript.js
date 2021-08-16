// chacklist -01 
/* use tagname */
const heading = document.getElementsByTagName('h1');
for (const h1 of heading) {
    console.log(h1);
}

/* or use id */
const title = document.getElementById('penguin');
console.log(title);

// chacklist -02

function exChangeText() {
    document.getElementById('change-title').innerText = "I am panguin";
}
