const view = document.getElementById("view")
const hello = document.querySelector(".hello")
const iframe = document.getElementById("iframe")
const shop = document.getElementById("table")
const produktai = [{
    pavadinimas: 'Warhammer 40,000: Darktide',
    kaina: '32.99 €',
    imgsrc: './img/darktide.jpg'
},{
    pavadinimas: 'Battlefield 2042',
    kaina: '49.99 €',
    imgsrc: './img/2042.jpg'
},{
    pavadinimas: 'Days Gone',
    kaina: '39.99 €',
    imgsrc: './img/days gone.jpg'
},{
    pavadinimas: 'New World',
    kaina: '33.50 €',
    imgsrc: './img/new world.jpg'
}]

function power () {
    console.log("on off")
if (view.classList.contains("off")) {
    view.classList.remove("off")
    hello.textContent="Hello and welcome!"
if (!iframe.classList.contains("off")) {
        iframe.classList.add("off")
}
if (!shop.classList.contains("off")) {
        shop.classList.add("off")
}
}else {
    hello.textContent="Goodbye!"
    iframe.classList.add("off")
    shop.classList.add("off")
    turnOff()
}
}

function News () {
    console.log("News")
if (!shop.classList.contains("off")) {
    shop.classList.add("off")
    iframe.classList.remove("off")
} else {
    iframe.classList.remove("off")
}
    iframe.src="https://www.youtube.com/embed/y-28CssnqEE"
    iframe.title="YouTube video player"
}

function Return () {
    console.log("Return")
    iframe.classList.add("off")
    shop.classList.add("off")
}

function Shop () {
    console.log("shop")
if (!iframe.classList.contains("off")) {
    iframe.classList.add("off")
    shop.classList.remove("off")
    rodytiProduktus()
} else {
    shop.classList.remove("off")
    rodytiProduktus()
}
}

function Google () {
    console.log("google")
if (!shop.classList.contains("off")) {
    shop.classList.add("off")
    iframe.classList.remove("off")
} else {
    iframe.classList.remove("off")
}
    iframe.src="https://www.google.com/search?igu=1"
    iframe.title="Google"
}

function turnOff () {
setTimeout(()=> {
    view.classList.add("off")
},2000)
}

const rodytiProduktus = () => {
document.querySelector('tbody').innerHTML = ''
produktai.forEach((produktas) => {
    document.querySelector('tbody').innerHTML += `<tr class="data-row">
    <td><img src="${produktas.imgsrc}"/></td>
    <td>${produktas.pavadinimas}</td>
    <td>${produktas.kaina}</td>
</tr>`
})
}