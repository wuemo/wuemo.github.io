document.querySelector('h1').addEventListener('click', function() {
    document.querySelector('h1').textContent = 'Hello there!';
});

const myImage = document.querySelector('img');

myImage.onclick = () => {
    const  mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/c++.png') {
        myImage.setAttribute('src', '/images/f.jpg');
    }
    else {
        myImage.setAttribute('src', '/images/c++.png');
    }
};

let mybtu = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
}

mybtu.onclick = function() {    
    setUserName();
}