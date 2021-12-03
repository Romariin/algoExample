// TODO: Crée une fonction asynchrone pour récuperer les datas d'une API
// TODO: Faire appparraitre un selector avec les passions récupérer via l'API
// TODO: Afficher le resultat sur la page web

function globalFunction() {
    generateSelector()
    async function getAPIData() {
        const response = await fetch("https://api.romarin.dev/api/algo-exemples");
        const data = await response.json();
        return data;
    }
    function generateSelector() {
        getAPIData()
            .then(result => {
                var catPassion = [];
                result.data.forEach(resultatPassion => {
                    for (let i = 0 ; i < resultatPassion.attributes.passion.length ; i++) {
                        if (!catPassion.includes(resultatPassion.attributes.passion[i])) {
                            catPassion.push(resultatPassion.attributes.passion[i]);
                        }
                    }
                    catPassion.sort();
                })
                const divSelect = document.querySelector(".selector");
                const selectList = document.createElement("select");
                selectList.id = "mySelect";
                divSelect.appendChild(selectList);
                const option = document.createElement("option");
                option.text = "Recherche par passion";
                selectList.appendChild(option);
                const actualSelected = document.getElementById("mySelect");

                for (let i = 0 ; i < catPassion.length ; i++) {
                    const option2 = document.createElement("option");
                    option2.value = catPassion[i];
                    option2.text = catPassion[i];
                    selectList.appendChild(option2);
                }
                const resultDiv = document.querySelector(".result");
                actualSelected.addEventListener('change', (event) => {
                    resultDiv.innerHTML = "";
                    result.data.forEach(info => {
                        info.attributes.passion.forEach(finalData => {
                            const divContent = document.createElement("div");
                            const titleContent = document.createElement("h1");
                            const pContent = document.createElement("p");
                            if (finalData === actualSelected.value) {
                                titleContent.innerText = info.attributes.name;
                                pContent.innerText = `Age: ${info.attributes.age}\nVille: ${info.attributes.ville}\nPassion(s): ${info.attributes.passion}`;
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
globalFunction()


