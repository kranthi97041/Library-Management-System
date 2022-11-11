function searchBook(){
    const input = document.getElementById('search').value.toUpperCase();
    // console.log(input);
    const cardContainer = document.getElementById('card-lists');
    // console.log(cardContainer);

    const cards = document.getElementsByClassName('cardd-shadow')
    // console.log(cards);
    // console.log(cards.length)

    // let count = 0;
    for(let i=0; i < cards.length; i++){
        let title = cards[i].querySelector(".cardd-body p.book-title");
        // console.log(title);
        let author = cards[i].querySelector(".cardd-body p.book-author");
        let language = cards[i].querySelector(".cardd-body p.book-language");
        let year = cards[i].querySelector(".cardd-body p.book-year");

        if(title.innerText.toUpperCase().indexOf(input) > -1 || author.innerText.toUpperCase().indexOf(input) > -1
        || language.innerText.toUpperCase().indexOf(input) > -1 || year.innerText.toUpperCase().indexOf(input) > -1){
            cards[i].style.display = "";
            count++;
        }else{
            cards[i].style.display = "none";
        }
    }
    console.log(count);
}