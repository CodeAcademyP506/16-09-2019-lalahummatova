var container=document.createElement("div")
document.body.appendChild(container)
document.body.style.margin="0px"
document.body.style.padding="0px"
document.body.style.boxSizing="border-box"

container.style.height="40px"
container.style.backgroundColor="#212529"
var start=document.createElement("a")
container.appendChild(start)
var atext=document.createTextNode("Start Bootstrap")
start.href="#"
start.appendChild(atext)
start.style.color="white"
start.style.fontSize="1.25rem"
start.style.textDecoration="none"
start.style.marginTop="5px"
container.style.display="flex"
container.style.justifyContent="space-around"
// container.style.position="fixed"
// container.style.width="100%"
// container.style.left="0"
// container.style.top="0px"





var home=document.createElement("div")
container.appendChild(home)
var ul1=document.createElement("ul")
home.appendChild(ul1)
home.style.display="flex";
var a = ["Home","About","Services","Contact"]
for(var i=0;i<4;i++) {
   var li1=document.createElement("li") 
   ul1.appendChild(li1)
   ul1.style.display="flex"
   var a1=document.createElement("a")
   li1.appendChild(a1)
   var text1=document.createTextNode(a[i])
   a1.style.margin="10px"
   a1.style.marginBottom="10px"
   a1.appendChild(text1)
   a1.href="#"
   a1.style.color="white"
   a1.style.textDecoration="none"
   ul1.style.listStyleType="none"
}

var section1=document.createElement("section")
var cont=document.createElement("div")
var leftdiv=document.createElement("div")
var rightdiv=document.createElement("div")
var _name=document.createElement("h1")
var listName = ["category1","category2","category3"]
var item=document.createElement("div")
var img900=document.createElement("img")
img900.src="images/900x350 (1).png"



img900.setAttribute("width", "700");
img900.setAttribute("height", "338");
img900.style.marginTop="20px"



section1.style.width="100%"
section1.style.display="flex"
section1.style.justifyContent="center"


cont.style.width="61.5%"
//cont.style.border="1px solid black"
cont.style.display="flex"
cont.style.justifyContent="space-between"

leftdiv.style.width="35%"
leftdiv.style.height="auto"
//leftdiv.style.border="solid black 1px"
_name.innerText= "Shop Name"



rightdiv.style.width="60%"
rightdiv.style.height="50px"
//rightdiv.style.border="solid black 1px"


rightdiv.appendChild(img900)
leftdiv.appendChild(_name)
cont.appendChild(leftdiv)
cont.appendChild(rightdiv)
section1.appendChild(cont)
document.body.appendChild(section1)


for(var i=0;i<listName.length;i++) {
   var lista=document.createElement("a")
   lista.innerText=listName[i]
   lista.href="#"
   lista.style.display="block"
   leftdiv.appendChild(lista)
   lista.style.padding="20px 10px"
   lista.style.border="solid black 1px"
   lista.style.color="blue"
   
}
var pattern = document.createElement("div");
pattern.style.width = "100%"

pattern.style.display = "flex"
pattern.style.flexWrap = "wrap"
pattern.style.justifyContent = "space-between"
for (var i=0;i<6;i++) {
   var childDiv = document.createElement("div")
   childDiv.style.display = "flex"
   childDiv.style.flexDirection = "column"
   childDiv.style.border = "1px solid gray"
   childDiv.style.width = "30%"
   childDiv.style.marginBottom = "20px"
   
   var img700=document.createElement("img")
   img700.src="images/700x400.gif"
   
   img700.style.width="100%"
   childDiv.appendChild(img700)
   var link = document.createElement("a")
   link.href="#"
   link.innerText = "Item one"
   link.style.fontSize = "22px"
   childDiv.appendChild(link)
   var content = document.createElement("h3")
   content.innerText="$24.99"
   childDiv.appendChild(content)

   var lorem = document.createElement("p")
   lorem.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
   childDiv.appendChild(lorem)
   var starDiv = document.createElement("div")
  
   for(var k=0;k<4;k++){
      var icon = document.createElement("i")
      var classI = document.createAttribute("class")
      classI.value = "fas fa-star"
      icon.setAttributeNode(classI)
      starDiv.appendChild(icon)
      if(k==3)(
         icon.style.color = "White"
      )
   }
  
  
  
   starDiv.style.width = "100%"
   starDiv.style.display = "flex"
  // starDiv.style.justifyContent = ""
   starDiv.style.backgroundColor = "gray"

   
   childDiv.appendChild(starDiv)

  pattern.appendChild(childDiv)

}
 rightdiv.appendChild(pattern)

var section2=document.createElement("section")
document.body.appendChild(section2)

var lastOne=document.createElement("div")
section2.appendChild(lastOne)

lastOne.style.backgroundColor="black"
lastOne.style.height="60px"
lastOne.style.width="100%"
lastOne.style.position="absolute"
lastOne.style.bottom="-150px"
lastOne.style.left="0"









