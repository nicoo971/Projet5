function getPanier() {
    let panier = localStorage.getItem("panier");
    if (panier === null) {
        return [];
    }

    return JSON.parse(panier);
}

function priceToEuro(prixOriginal) {
    let prixEnEuro = (prixOriginal / 100);
    let prixEnText = prixEnEuro.toFixed(2);
    return prixEnText + " €";
}

function addteddy(teddy) {
    let panier = getPanier()
        // console.log(panier)
        // console.log(teddy)

    //regarder si teddy._id déja dans le panier   //Si oui
    //   incrémenter qté de 1
    let notInBasket = true;
    for (let i = 0; i < panier.length; i++) {
        if (teddy._id === panier[i]._id) {
            notInBasket = false; // l'ajout au panier a deja éte fait pas besoin de le faire aprés.
            panier[i].quantity += 1;
        }
    }

    if (notInBasket) //si non on ajoute au panier avec qty de 1
    {
        teddy.quantity = 1; // on défini la variable quantity 
        panier.push(teddy)
    }

    console.log(panier)
    savePanier(panier)
}

function savePanier(panier) {
    let panierstr = JSON.stringify(panier); //conversion en caractére "stringify" pour le panier
    localStorage.setItem("panier", panierstr);

}