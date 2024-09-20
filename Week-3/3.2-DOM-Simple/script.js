let counter = 0

function callback() {
    const el = document.querySelectorAll("h4")[1]
    el.innerHTML = counter;
    //console.log(counter);
    counter = counter + 1;
}

setInterval(callback, 1000);