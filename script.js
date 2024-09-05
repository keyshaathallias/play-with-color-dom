// Exercise 1
const btnChangeColor = document.getElementById('btnChangeColor');

btnChangeColor.addEventListener('click', function() {
    document.body.classList.toggle('pink');
})

// Exercise 2
const btnRandomColor = document.createElement('button');
const textBtn = document.createTextNode('Random Color');
btnRandomColor.appendChild(textBtn);

btnRandomColor.setAttribute('type', 'button');

btnChangeColor.after(btnRandomColor);

btnRandomColor.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b +')';
})

// Exercise 3
const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');

sRed.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sGreen.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sBlue.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})