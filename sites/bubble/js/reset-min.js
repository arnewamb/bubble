var buttonReset=document.getElementById("reset"),inputField=document.getElementsByClassName("textField"),contactForm=document.getElementById("input"),node=document.createElement("p"),succesNode=document.createTextNode("Your message has been successfully sent");node.appendChild(succesNode),buttonReset.onclick=function(){contactForm.appendChild(succesNode);for(var e,t=0;t<6;t++)e=inputField[t].value=""};