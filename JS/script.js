// !const colorSquare =  e.target.classList[1]

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

  let div = document.createElement('div')
  let main =  document.querySelector("main")
  let displaySection = main.children[0]
  displaySection.appendChild(div)
 const colorAll = e.target.classList[1]
 let li = document.createElement("li")
 let ul = document.querySelector("ul")
 ul.appendChild(li)
 div.className =  'displayedsquare' +  colorAll

 if(colorAll == "green" ){
    div.className =  'displayedsquare green'
    li.innerText = getElapsedTime()  +  " Create news green square"
 }else if (colorAll ==  "violet"){
     div.className = 'displayedsquare violet'
     li.innerText =  getElapsedTime() + " Create news violet square"
 }else if(colorAll == "orange"){
     div.className = 'displayedsquare orange'
    li.innerText =  getElapsedTime()  +  " Create news orange square"
 }

 
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}
