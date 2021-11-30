// TODO: Crée une fonction asynchrone pour récuperer les datas d'un JSON | ✔
function globalFunction() {
    genSelector();
    async function getJSONData() {
        const response = await fetch("./src/json/data.json");
        const data = await response.json();
        return data;
    }
// TODO: Faire appparraitre un selector avec les passions récupérer dans le JSON | ✔
    function genSelector() {
        // ["Vélo", "Tricot", "Fashion", "Muscu", "Gaming", "Développement"] //
        getJSONData()
            .then(result => {
                var catPassion = [];
                result.forEach(result => {
                    for (let i = 0 ; i < result.passion.length ; i++) {
                        if (!catPassion.includes(result.passion[i])) {
                        catPassion.push(result.passion[i]);
                        }
                    }
                })
                const divSelect = document.querySelector(".selector");
                const selectList = document.createElement("select");
                selectList.id = "mySelect";
                divSelect.appendChild(selectList);

                for (let i = 0 ; i < catPassion.length ; i++) {
                    const option = document.createElement("option");
                    option.value = catPassion[i];
                    option.text = catPassion[i];
                    selectList.appendChild(option)
                }
            })
    }

}
// TODO: Faire des filtres avec le selector (switch, case, break) | ✖

// TODO: Afficher le resultat sur la page web | ✖

const contentText = document.createElement("p");
globalFunction();
