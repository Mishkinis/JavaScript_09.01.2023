function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let masyvas = []

for(let i = 0; i < 10; i++) {
    masyvas.push(rand(1, 11))
}
console.log(masyvas)