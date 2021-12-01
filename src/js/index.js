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
        getJSONData()
            .then(result => {
                var catPassion = [];
                result.forEach(result => {
                    for (let i = 0; i < result.passion.length; i++) {
                        if (!catPassion.includes(result.passion[i])) {
                            catPassion.push(result.passion[i]);
                        }
                    }
                })
                const divSelect = document.querySelector(".selector");
                const selectList = document.createElement("select");
                selectList.id = "mySelect";
                divSelect.appendChild(selectList);
                const option = document.createElement("option");
                option.text = "Recherche par passion";
                selectList.appendChild(option);
                const actualSelected = document.getElementById("mySelect");

                for (let i = 0; i < catPassion.length; i++) {
                    const option = document.createElement("option");
                    option.value = catPassion[i];
                    option.text = catPassion[i];
                    selectList.appendChild(option)
                }
                // TODO: ----------------------------------------------------------------
                // TODO: Afficher le resultat sur la page web | ✔
                const resultDiv = document.querySelector(".result")
                const balise = resultDiv.innerHTML;
                actualSelected.addEventListener('change', (event) => {
                    resultDiv.innerHTML = "";
                    result.forEach(info => {
                        info.passion.forEach(data => {
                            if (data === actualSelected.value) {
                                const divContent = document.createElement("div");
                                const titleContent = document.createElement("h1");
                                const pContent = document.createElement("p");

                                titleContent.innerText = info.name
                                pContent.innerText = `Age: ${info.age}\n Ville: ${info.ville}\nPassion(s): ${info.passion}`
                                divContent.appendChild(titleContent);
                                divContent.appendChild(pContent);
                                resultDiv.appendChild(divContent);
                            }
                        })
                    })
                })
            })
    }
}
globalFunction();



