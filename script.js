const GITHUB_USER = 'chrislrogers';
const GITHUB_API_URL = 'https://api.github.com/users/' + GITHUB_USER + '/repos'

let recentRepos = document.getElementById("recent-repos");

function showRepos() {
    fetch(GITHUB_API_URL)
        .then((response) => response.json())
        .then((data) => {
            recentRepos.innerHTML = '<!-- Code injected by script.js -->';
            for (let i = 0; i < data.length; i++) {

                let cardHtml = `<div class="card">`;

                cardHtml = cardHtml + `<a id="project-url" href="${data[i].html_url}" target="_blank"><h3 class="gradient-text" id="project-name">${data[i].name}</h3></a>`;
                cardHtml = cardHtml + `<h4 id="project-language">${data[i].language}</h4>`;

                if (data[i].description !== null) {
                    cardHtml = cardHtml + ` <p>${data[i].description}</p>`;
                }
            
                cardHtml = cardHtml + `</div></div>`;
                recentRepos.insertAdjacentHTML("beforeend", cardHtml);
            }
        })
}

showRepos();