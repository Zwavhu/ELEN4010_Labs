"use strict";

const button = document.getElementById("addButton"); // if you're trying to find a function make sure its document.

button.addEventListener(
  "click",
  function() {
    const paragraph = document.createElement("p"); // creating <p> element
    let text = document.createTextNode("This is a student"); // create text code
    paragraph.appendChild(text); // append text to <p>
    document.body.appendChild(paragraph); // append <p> to body
  },
  false
);
