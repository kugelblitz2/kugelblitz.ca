fetch ('/aboutme/selfdescription')
.then(x => x.text())
.then(y => document.getElementById("aboutme").innerHTML = y);

fetch ('/aboutme/hardware')
.then(x => x.text())
.then(y => document.getElementById("aboutme").innerHTML = y);