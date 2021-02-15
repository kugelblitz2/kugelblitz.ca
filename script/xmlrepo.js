var listpath = document.getElementById('paclistpath');
var listcontent;
fetch (listpath)
.then(x => x.text())
.then(y => listcontent = y);

parser = new DOMParser();
repolist = parser.parseFromString(listcontent, 'text/xml');

var listElement = document.getElementById('paclist');
var packageQuantity = repolist.getElementsByTagName("repo")[0].childElementCount;
for(var i = 0; i < packageQuantity; i++){
    var package = document.createElement('tr');

    var suite = document.createElement('td');
    suite.appendChild(document.createTextNode(
        repolist.getElementsByTagName('suite')[i].childNodes[0].nodeValue));

    var component;
    suite.appendChild(document.createTextNode(
        repolist.getElementsByTagName('component')[i].childNodes[0].nodeValue));

    var arch;
    suite.appendChild(document.createTextNode(
        repolist.getElementsByTagName('arch')[i].childNodes[0].nodeValue));
    
    var name;
    suite.appendChild(document.createTextNode(
        repolist.getElementsByTagName('name')[i].childNodes[0].nodeValue));
    
    var version;
    suite.appendChild(document.createTextNode(
        repolist.getElementsByTagName('version')[i].childNodes[0].nodeValue));
    
    listElement.appendChild(package);
}