async function printJSON() {
    const response = await fetch("package.json");
    const json = await response.json();
    console.log(json);
    var index = 0;
    change(json, index)
}

function change(json, index) {

    var sneker = json.sneakers[index]
    console.log(sneker.model)
    console.log(sneker.price)
    console.log(sneker.image_url)
    console.log(sneker.link)
    let element = document.getElementById("title")
    element.innerHTML = `<p>${sneker.model}</p>`

    element = document.getElementById("price")
    element.textContent = json.currency + sneker.price

    element = document.getElementById("image")
    element.src = sneker.image_url

    element = document.getElementById("box")
    element.src = sneker.link
    index++
    if (index >= json.sneakers.length) {
        index = 0
    }
    setTimeout(() => { change(json, index) }, 5000)
}
printJSON()
