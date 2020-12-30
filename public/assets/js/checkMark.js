document.addEventListener("DOMContentLoaded", () => {
    window.onload = (event) => {
    
      window.setInterval(function () {
        checkMark(); 
      }, 1000);
    };
    function firstLine() {
      let ul = document.querySelector("ul.alt");
      let xmlns = "http://www.w3.org/2000/svg";
      let firstSVG = document.createElementNS(xmlns, "svg");
  
      firstSVG.setAttribute("viewBox", "0 0 52 52");
  
      firstSVG.setAttribute("class", "checkmark");
  
      let circle = document.createElementNS(xmlns, "circle");
      circle.setAttribute(
        "class",
        "checkmark__circle"
  
      );
      circle.setAttribute("cx", "26");
      circle.setAttribute("cy", "26");
      circle.setAttribute("r", "25");
      circle.setAttribute("fill", "none");
  
  
      firstSVG.appendChild(circle);
      let path = document.createElementNS(xmlns, "path");
      path.setAttribute("class", "checkmark__check");
      path.setAttribute("fill", "none");
      path.setAttribute("d", "M14.1 27.2l7.1 7.2 16.7-16.8");
      firstSVG.appendChild(path);
  
  
  
      let firstLi = document.createElement("li");
  
      let firstP = document.createElement("p");
      firstP.setAttribute("class", "first-line");
      let firstText = document.createTextNode("No more guessing games, we know what's working based on specific tracking parameters.");
      firstP.appendChild(firstText);
  
      firstLi.appendChild(firstSVG);
      firstLi.appendChild(firstP);
  
      ul.appendChild(firstLi);
  
    }
  
    function secondLine() {
      let xmlns = "http://www.w3.org/2000/svg";
      let firstSVG = document.createElementNS(xmlns, "svg");
  
      firstSVG.setAttribute("viewBox", "0 0 52 52");
  
      firstSVG.setAttribute("class", "checkmark");
  
      let circle = document.createElementNS(xmlns, "circle");
      circle.setAttribute(
        "class",
        "checkmark__circle"
  
      );
      circle.setAttribute("cx", "26");
      circle.setAttribute("cy", "26");
      circle.setAttribute("r", "25");
      circle.setAttribute("fill", "none");
  
  
      firstSVG.appendChild(circle);
      let path = document.createElementNS(xmlns, "path");
      path.setAttribute("class", "checkmark__check");
      path.setAttribute("fill", "none");
      path.setAttribute("d", "M14.1 27.2l7.1 7.2 16.7-16.8");
      firstSVG.appendChild(path);
  
  
  
      let ul = document.querySelector("ul.alt");
      let secondLi = document.createElement("li");
      let secondP = document.createElement("p");
      secondP.setAttribute("class", "first-line");
      let secondText = document.createTextNode("Great pacing and adjustment software's to spout your campaign into producing profits.");
      secondP.appendChild(secondText);
      secondLi.appendChild(firstSVG);
      secondLi.appendChild(secondP);
  
  
      setTimeout(function () { ul.appendChild(secondLi); }, 1500);
  
    }
  
    function thirdLine() {
  
      let xmlns = "http://www.w3.org/2000/svg";
      let firstSVG = document.createElementNS(xmlns, "svg");
  
      firstSVG.setAttribute("viewBox", "0 0 52 52");
  
      firstSVG.setAttribute("class", "checkmark");
  
      let circle = document.createElementNS(xmlns, "circle");
      circle.setAttribute(
        "class",
        "checkmark__circle"
  
      );
      circle.setAttribute("cx", "26");
      circle.setAttribute("cy", "26");
      circle.setAttribute("r", "25");
      circle.setAttribute("fill", "none");
  
  
      firstSVG.appendChild(circle);
      let path = document.createElementNS(xmlns, "path");
      path.setAttribute("class", "checkmark__check");
      path.setAttribute("fill", "none");
      path.setAttribute("d", "M14.1 27.2l7.1 7.2 16.7-16.8");
      firstSVG.appendChild(path);
  
  
  
      let ul = document.querySelector("ul.alt");
      let thirdLi = document.createElement("li");
      let thirdP = document.createElement("p");
      thirdP.setAttribute("class", "first-line");
      let thirdText = document.createTextNode("Enhanced learning algorithms boost your better campaigns into the best ones.");
      thirdP.appendChild(thirdText);
      thirdLi.appendChild(firstSVG);
      thirdLi.appendChild(thirdP);
      setTimeout(function () { ul.appendChild(thirdLi); }, 2500);
    }
  
    function checkMark() {
  
      let ul = document.querySelector("ul.alt");
      let sectionElm = document.getElementById("ppc");
      let classes = sectionElm.classList;
      if (!classes.contains("inactive") && ul.innerText == "") {
  
        firstLine();
        secondLine();
        thirdLine();
      }
  
    }
  
  
  
  
  
  
  
  
  
  });
  
  
  