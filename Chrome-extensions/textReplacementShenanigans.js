var ELEMENT = 1;
var DOCUMENT = 9;
var DOCUMENT_FRAGMENT = 11;
var TEXT = 3;

// Enter things that you'd like to replace
var MATCH = ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','t','s','t','h','v','w','x','y','z', 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','p','Q','R','S','T','T','h','V','w','X','Y','Z'];
var REPLACE = ['α','β','c','δ','ε','φ','γ','η','ι','j','κ','λ','μ','ο','π','q','ρ','τ','σ','θ','v','ω','ξ','υ','ζ','Α','Β','C','Δ','Ε','Φ','Γ','Η','Ι','J','Κ','Λ','Μ','Ν','Ο','Π','Q','Ρ','Σ','Τ','Θ','V','Ω','Ξ','Υ','Ζ'];

var currentDate = new Date();

if(currentDate.getTime() > 1441105869000){
    walk(document.body);
}

function walk(node) {
    // Function from here for replacing text: http://is.gd/mwZp7E

    var child, next;

    switch (node.nodeType) {
        case ELEMENT:  // Element
        case DOCUMENT:  // Document
        case DOCUMENT_FRAGMENT: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case TEXT: // Text node
                replaceText(node);
            break;
    }
}

function replaceText(textNode) {
    var v = textNode.nodeValue;

    // Go through and match/replace all the strings we've given it, using RegExp.
    for (var i = 0; i < MATCH.length; i++) {
        if(Math.random() < 0.1){
            v = v.replace(new RegExp(MATCH[i], 'g'), REPLACE[i]);
        }
    }

    textNode.nodeValue = v;
}
