const URL = "https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json";
let loadProducts = async () =>{
    let response = await fetch("https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json");
    let result = await response.json();
    for(let obj of result){
        let name = obj.name;
        let price = obj.price;
        let src = obj.src;
        let type = obj.type;
        
        let message = `
        <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
        <div class="card card-blog card-plain">
        <div class="card-header p-0 mt-n4 mx-3">
        <a class="d-block shadow-xl border-radius-xl">
        <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
        </a>
        </div>
        <div class="card-body p-3">
        <p class="mb-0 text-sm">${type}</p>
        <a href="javascript:;">
        <h5>
        ${name}
        </h5>
        </a>
        <p class="mb-4 text-sm">
        <b>Price: </b> $ ${price}
        </p>
        </div>
        </div>
        </div>`
        
        document.getElementById("prueba").innerHTML += message;
        
    }
    let responseXML = await fetch("https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.xml");
    let resultXML = await responseXML.text();
    let xml = (new DOMParser()).parseFromString(resultXML,"application/xml");
    let arrayProducts = xml.getElementsByTagName('product');
    for (let element of arrayProducts){
        let name = element.getElementsByTagName('name')[0].innerHTML;
        let price = element.getElementsByTagName('price')[0].innerHTML;
        let src = element.getElementsByTagName('src')[0].innerHTML;
        let type = element.getElementsByTagName('type')[0].innerHTML;
        let message = `
        <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
        <div class="card card-blog card-plain">
        <div class="card-header p-0 mt-n4 mx-3">
        <a class="d-block shadow-xl border-radius-xl">
        <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
        </a>
        </div>
        <div class="card-body p-3">
        <p class="mb-0 text-sm">${type}</p>
        <a href="javascript:;">
        <h5>
        ${name}
        </h5>
        </a>
        <p class="mb-4 text-sm">
        <b>Price: </b> $ ${price}
        </p>
        </div>
        </div>
        </div>`
        
        document.getElementById("prueba").innerHTML += message;
    }
    





}

loadProducts(URL)