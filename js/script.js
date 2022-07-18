async function printJSON() {
    const response = await fetch("package.json");
    const json = await response.json();
    console.log(json);
    var index = 0;
    change(json.sneakers, index)
}

function change(sneaker, index) {

    console.log(sneaker[index].model)
    console.log(sneaker[index].price)
    console.log(sneaker[index].image_url)
    console.log(sneaker[index].link)
    index++
    if (index >= sneaker.length) {
        index = 0
    }
    setTimeout(() => { change(sneaker, index) }, 5000)

}
printJSON()

const createListItem = (model) => `<div>${model}</div>`;
const createList = (banner - label) => {}