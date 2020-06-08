let myImage = document.querySelector('img')
myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/5S4A2614.jpg') {
    myImage.setAttribute('src', 'images/5S4A2673.jpg')
  } else {
    myImage.setAttribute('src', 'images/5S4A2614.jpg')
  }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')
function setUserName() {
  let myName = prompt('请输入你的名字。')
  if (!myName || myName === null) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.textContent = 'hello ' + myName
  }
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  let storedName = localStorage.getItem('name')
  myHeading.textContent = 'hello ' + storedName
}

myButton.onclick = function () {
  setUserName()
}
