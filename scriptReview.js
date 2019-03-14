fetch('/review').then(resp => resp.json()).then(review => { console.log(review);

    let container = document.querySelector('#tableReviews');
    let tabel = [];
    
    for (let i = 0; i<review.length; i++){
        tabel[i] = document.createElement('tr');
        container.appendChild(tabel[i]);

        let rev=review[i];
        let cell1 = document.createElement('th');
        cell1.setAttribute('id','NumeProdus');                  //adaug id pentru  nume
        cell1.textContent = rev.numeProdus;
        tabel[i].appendChild(cell1);

        let cell2 = document.createElement('td');           
        cell2.textContent = rev.review;
        tabel[i].appendChild(cell2);

        let cell3= document.createElement('td'); 
        cell3.setAttribute('class','NotaProdus');               //adaug id pentru nota
        cell3.textContent=rev.nota;
        tabel[i].appendChild(cell3);
    }
    
})

/*
{
	"numeProdus":"Iphone X",
	"review":"Prea scump ",
	"nota":"5"
}
*/