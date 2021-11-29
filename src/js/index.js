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

const contentText = document.createElement("p");
getJSONData();