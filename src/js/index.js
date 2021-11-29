// TODO: Crée une fonction asynchrone pour récuperer les datas d'un JSON | ✔
async function getJSONData() {
    const response = await fetch("./src/json/data.json");
    const data = await response.json()

    data.user.forEach(info => {
        info.passion.forEach(result => {

            if (result === "Développement") {
                console.log(info.name)
            }
        })

    })
}

// TODO: Faire appparraitre un selector avec les passions récupérer dans le JSON | ✖
// TODO: Faire des filtres avec le selector (switch, case, break) | ✖
// TODO: Afficher le resultat sur la page web | ✖

const contentText = document.createElement("p");
getJSONData();