let list = document.getElementById("list");

let loadMessage = document.createElement("p");
loadMessage.className = "msg";
loadMessage.innerText = "Laster inventar...";
list.appendChild(loadMessage);

fetch("../inventory/inventoryindex.json")
    .then(response => response.json())
    .then(data => {
        list.removeChild(loadMessage);

        data.forEach((obj, i, arr) => {
            let item = document.createElement("div");
            item.className = "item";
    
            let feature = document.createElement("div");
            feature.className = "feature";
            feature.style.backgroundImage = `url("../inventory/${obj.feature}")`;
            item.append(feature);
            
            let description = document.createElement("div");
            description.className = "description";
            
            let name = document.createElement("h3");
            name.innerText = `${obj.name}`;
            description.append(name);

            let content = document.createElement("p");
            content.innerText = `${obj.content.join(", ")}.`;
            description.append(content);

            let price = document.createElement("p");
            price.innerHTML = `Pris <b>: ${obj.price},-</b>`;
            description.append(price);

            item.append(description);

            list.append(item);
        });
    })
    .catch(error => {
        console.log(error);
    })