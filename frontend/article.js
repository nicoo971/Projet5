const params = new URLSearchParams(location.search);
let teddy = null;
let id = params.get("id");
fetch("http://localhost:3000/api/teddies/" + id)
    .then((response) => response.json())
    .then((response) => {
        teddy = response;
        // addteddy(response);
        console.log(response);
        let html = ` <div class="col-lg-4 col-md-6 mb-4 mx-auto pt-3 ">
      <div class="card h-100">
        <a href="#"><img class="card-img-" src="${teddy.imageUrl}" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a  href="produits.html#${teddy._id}">${teddy.name}</a>
          </h4>
          <h5>${priceToEuro(teddy.price)}</h5>
          <p class="card-text">${teddy.description}</p>
        </div>
        <label for="color-select">Choose a color:</label>
        <select name="colors" id="color-select">  
        </select>
       <button id="addtocart" onclick="addcart()">ajouter au panier
           </button>
      </div>
     </div>`;
        document.getElementById("containner").innerHTML += html;
        let options = '';
        for (color of teddy.colors) {
            options += '<option value="' + color + '">' + color + '</option>'
        }
        document.getElementById("color-select").innerHTML += options;
    });

function addcart() {
    addteddy(teddy);
}