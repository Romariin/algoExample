// TODO: Crée une fonction asynchrone pour récuperer les datas d'un JSON | ✔
function globalFunction() {
    genSelector();

    async function getJSONData() {
        const response = await fetch("https://api.romarin.dev/api/algo-exemples");
        const data = await response.json();
        return data;
    }

// TODO: Faire appparraitre un selector avec les passions récupérer dans le JSON | ✔
    function genSelector() {
        getJSONData()
            .then(result => {
                var catPassion = [];
                result.data.forEach(result => {
                    for (let i = 0; i < result.attributes.passion.length; i++) {
                        if (!catPassion.includes(result.attributes.passion[i])) {
                            catPassion.push(result.attributes.passion[i]);
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
                actualSelected.addEventListener('change', (event) => {
                    resultDiv.innerHTML = "";
                    result.data.forEach(info => {
                        info.attributes.passion.forEach(data => {
                            if (data === actualSelected.value) {
                                const divContent = document.createElement("div");
                                const titleContent = document.createElement("h1");
                                const pContent = document.createElement("p");

                                // console.log(info.attributes.age)
                                titleContent.innerText = info.attributes.name
                                pContent.innerText = `Age: ${info.attributes.age}\n Ville: ${info.attributes.ville}\nPassion(s): ${info.attributes.passion}`
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



