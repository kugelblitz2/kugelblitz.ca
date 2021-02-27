fetch ('/madewithlove')
.then(x => x.text())
.then(y => document.getElementById('madewithlove').innerHTML = y);