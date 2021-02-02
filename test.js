class Episode {
    constructor(title, duration, hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
    }
}

function TestEpisode() {
    let firstEpisode = new Episode("RotS", 120, true);
    console.log(firstEpisode);

}

function TestScopeText() {
    let text = "test2";
    let age = 40;
    if (age > 20) {
        let text2 = "test3";
        console.log('t2', text2); //test3
        text = "test4";
    }

    //alert(text2); //undefined
    console.log('t', text); // test2 ou test4 en fonction de l'age 
    return "fini";
}

TestEpisode();
let resultat = TestScopeText();
console.log('result', resultats)

//alert("coucou")