const newDiv = document.createElement('div');
newDiv.innerHTML = '<a href="http://www.ebenimeli.org" target="_blank">Enrique Benimeli</a> · <a href="http://www.esferatic.com">Esfera TIC</a> · 2024';
newDiv.style.backgroundColor = 'lightblue';
newDiv.style.padding = '10px';
newDiv.style.textAlign = 'center';
newDiv.style.fontSize = '14px';
document.body.insertBefore(newDiv, document.body.firstChild);

setTimeout(() => {
    newDiv.remove();
}, 10000);
