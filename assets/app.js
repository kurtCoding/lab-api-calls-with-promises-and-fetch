const list = document.querySelector(".centered");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getTrivia);

function getTrivia(e) {
    e.preventDefault()
    fetch("https://opentdb.com/api_config.php?amount=7").then((res) => res.json()).then((data) => {

    data.results.forEach((article) => {
        list.append(createArticle(article));
    })

    }).catch((error) => {
        console.log(error);
    })
}

function createArticle(trivia) {
    const article = document.createElement("article");
    article.classlist.add("card");
    article.innerHTML = `
    <h2>${trivia.category}</h2>
    <p>${trivia.question}</p>
    <button>Show Answer</button>
    <p class="hidden">${trivia.answer}`

    return article;
}
