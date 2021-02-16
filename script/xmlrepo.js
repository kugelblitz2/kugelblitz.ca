function getXML() {
    var listpath = document.getElementById('paclistpath').getAttribute('content');
    fetch (listpath)
    .then(x => x.text())
    .then(y => document.getElementById('listcontent').setAttribute('content', y));
}

getXML();
parser = new DOMParser();
repolist = parser.parseFromString(document.getElementById('listcontent').getAttribute('content'), 'text/xml');

var listElement = document.getElementById('paclist');
var packageQuantity = repolist.getElementsByTagName('repo')[0].childElementCount;
for(var i = 0; i < packageQuantity; i++){
    var suite = document.createElement('td');
    suite.appendChild(document.createTextNode(
        repolist.getElementsByTagName('suite')[i].childNodes[0].nodeValue));

    var component = document.createElement('td');
    component.appendChild(document.createTextNode(
        repolist.getElementsByTagName('component')[i].childNodes[0].nodeValue));

    var arch = document.createElement('td');
    arch.appendChild(document.createTextNode(
        repolist.getElementsByTagName('arch')[i].childNodes[0].nodeValue));
    
    var pacname = document.createElement('td');
    pacname.appendChild(document.createTextNode(
        repolist.getElementsByTagName('name')[i].childNodes[0].nodeValue));
    
    var version = document.createElement('td');
    version.appendChild(document.createTextNode(
        repolist.getElementsByTagName('version')[i].childNodes[0].nodeValue));
    
    package.appendChild(suite);
    package.appendChild(component);
    package.appendChild(arch);
    package.appendChild(pacname);
    package.appendChild(version);
    listElement.appendChild(package);
}