let input = document.getElementById("search");
let wordToCheck;

var data = JSON.parse(sessionStorage.getItem('data'));

    input.addEventListener("input", function() {
        let div= document.getElementById("videoContainer");

        wordToCheck = input.value;
        div.innerHTML=" ";

    data.articles.forEach(news => {

        // inserire il parametro tramite la quale si vuole filtrare (news.xxx)
        parama=news.title;

        if(parama.includes(wordToCheck)){
            const markup = `
                <div class="window" id="window">
                    <img src="${news.urlToImage}" alt="${news.name}">
                    <div class="infoVideo">
                        <div class="profile-img"></div>
                        <div class="video-description">
                            <h2>${news.title}</h2>
                            <h4>${news.description}</h4>
                        </div>
                    <box-icon name='dots-vertical-rounded'></box-icon>
                </div>
                </div>
        `;
        div.insertAdjacentHTML('beforeend', markup);

    console.log("La funzione è stata eseguita!");
    console.log(wordToCheck);
    }

    })
});