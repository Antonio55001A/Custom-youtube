Npages= document.getElementById('Npage').textContent;
console.log(Npages);

fetch('https://newsapi.org/v2/everything?q=Apple&from=2023-01-26&sortBy=popularity&apiKey=2939bf1599d547b8a16d5cfb6a454bdf')
.then(res => {
    return res.json();
})
.then(data => {

    let news = document.getElementById('news');
    let div = document.createElement("div");
    div.setAttribute("class","videoContainer");
    div.setAttribute("id","videoContainer");
    news.append(div);
    sessionStorage.setItem('data', JSON.stringify(data));
    var data = JSON.parse(sessionStorage.getItem('data'));

    // parametri di prova, normalmente andrebbero le categorie o la lingua ma purtroppo non ci sono, quindi mi sono ingegnato
    let wordToCheck = ["0","1","sp","de","ma","be","ba","ip"];


    data.articles.forEach(news => {

        if(Npages>1){
                parama= news.description;
            if(parama.includes(wordToCheck[Npages])){
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
        }}else{

            console.log(news.category);
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
        }
    });
  })

  .catch(error => console.log(error));