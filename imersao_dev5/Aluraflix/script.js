let listMovie = ["https://upload.wikimedia.org/wikipedia/en/9/9e/Yesterday_%282019_poster%29.png" , 

"https://upload.wikimedia.org/wikipedia/pt/thumb/0/08/Thor_Love_and_Thunder_poster.jpg/250px-Thor_Love_and_Thunder_poster.jpg" ,

"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"];




function addMovie() {
    let favoriteMovie = document.getElementById('movie').value
    let elementMovie = "<img src=" + favoriteMovie  + " >"
    let listMovie = document.getElementById('listMovie');

    listMovie.innerHTML = listMovie.innerHTML + elementMovie

    document.getElementById('movie').value = ''



}


/*

for (let indice = 0; indice < listMovie.length; indice++) {
    document.write("<img src=" + listMovie[indice]  + " >");
}

let listMovie = ["Yesterday" , "A chegada" , "Escola de Rock"];


listMovie.push("Harry Potter 2", "Yesterday2" , "A chegada2" , "Escola de Rock2")


for (let indice = 0; indice < listMovie.length; indice++) {
    document.write("<p>" + listMovie[indice]  + "</p>");
}
*/