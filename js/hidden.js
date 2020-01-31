
function showSection() {
    var i;
    for (i = 0; i < links.length; i ++ ) {
        document.getElementById(links[i].href.split('#')[1]).className = 'hidden';
    }
    document.getElementById(this.href.split('#')[1]).className = '';
    
    return false;
}
function createShowSection(links) {
    return showSection;
}
var sections = document.getElementById('sections'),
    links = sections.getElementsByTagName('a'),
    showSection = createShowSection(links),
    i;
for (i = 0; i < links.length; i += 1) {
    links[i].onclick = showSection;
}
showSection();