let panier = getPanier();
let productIdList =[];

for (let i = 0; i < panier.length; i++) {
    let titre = "le cours";
    let teddy = panier[i];
    console.log(teddy);
    productIdList.push(teddy._id);
    // a ecrcire
    let html = `  <div class="card" style="width: 18rem;">
<img src="${teddy.imageUrl}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${teddy.name}</h5>
  <p class="card-text">${teddy.price}*${teddy.quantity}=${
    teddy.price * teddy.quantity
  }</p>
 
</div>
  </div>`;
  // html fais fait a partir du js la carte des teddys
    const containerElt = document.getElementById("containnerpanier");
    containerElt.innerHTML += html;
    // inerthtmlconnaître et de modifier le contenu d'une balise HTML
}

function calculprix() {
    total = 0;
    //  let teddy = panier[i];
    for (let i = 0; i < panier.length; i++) {
        total += panier[i].price * panier[i].quantity;
        // formules pour connaitre le total du panier
    }
    const prixtotalElt = document.getElementById("prixtotal");
    prixtotalElt.innerHTML += total;
}

calculprix();
// for off

function envoidelacommande(e) {
    e.preventDefault();
    const emailElt = document.getElementById("email");
    const nameElt = document.getElementById("name");
    const lastnameElt = document.getElementById("lastname");
    const adresseElt = document.getElementById("adresse");
    const cityElt = document.getElementById("city");
    
    


    if (emailElt.value=="" ||nameElt.value=="" ||lastnameElt.value==""||adresseElt.value==""||cityElt.value==""){
      
        alert("Merci de remplit tout les champs");
         console.log("Merci de remplit tout les champs")
        return;
        // pour email non remplie
    }
    
    var data = {
        contact: {
            firstName: nameElt.value,
            lastName: lastnameElt.value,
            address: adresseElt.value,
            city: cityElt.value,
            email: emailElt.value,
        },
        products: productIdList
        // recup tt les prduits du panier avec un tableau 
    };

    var option = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }

    };

    fetch("http://localhost:3000/api/teddies/order", option)
        .then((response) => response.json())
        .then((dataorder) => {
            localStorage.clear();
            // suppersion du des donnée du panier aprés commande
            document.getElementById("containner").innerHTML= `<h2>merci ${dataorder.contact.firstName} pour votre commande</h2>
            <h3>votre numéro de commande est ${dataorder.orderId}</h3>`
        });

        
}