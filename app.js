let refreshBtn = document.querySelector('.btn-refresh')
let quotesContent = document.querySelector('.quotes-content')

function refreshFun() {
    fetch('https://motivational-quote-api.herokuapp.com/quotes').then((response) => response.json())
    .then((result) => {
        let randomNumber = Math.floor(Math.random() * result.length)
        quotesContent.innerHTML = `<h1><i class="fa-solid fa-quote-left"></i> ${result[randomNumber].quote} <i class="fa-solid fa-quote-right"></i></h1>
                                    <p>-- ${result[randomNumber].person}</p>`
    })
}
refreshBtn.addEventListener('click', refreshFun)
window.addEventListener('load',refreshFun)