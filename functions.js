var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    let element = document.getElementById("numOneCSSPage");
    

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    let att = element.getAttribute("href");
   
    // 1 (c) Determine new stylesheet file name
    let newAtt = "style1.css";
    if (att === "style1.css") {
        newAtt = "style2.css";
    }
   

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    element.setAttribute("href", newAtt);


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("href", newAtt);
  
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    const newAtt2 = localStorage.getItem("href");
    // 2 (b) get html style element by ID
    let element = document.getElementById("numOneCSSPage");

    // 2 (c) replace href attribute of html element.
    element.setAttribute("href", newAtt2);
}


