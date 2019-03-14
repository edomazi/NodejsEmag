fetch('/produse').then(resp => resp.json()).then(produse => { console.log(produse);

    let container = document.querySelector('#tabelProduse');
    let list = [];
    
    for (let i = 0; i<produse.length; i++){
        list[i] = document.createElement('tr');             //creez prima linie din tabel pentru elementul nou introdus cu postman
        container.appendChild(list[i]);                     //ii dau append

        let prod=produse[i];
        let item = document.createElement('th');            //creez th pentu prima linie cu numele
        item.textContent = prod.nume;
        list[i].appendChild(item);

        let item2 = document.createElement('th');           //creez th cu rowspan pentu prima linie cu pret
        item2.setAttribute('rowspan','2');
        item2.textContent = prod.pret;
        list[i].appendChild(item2);

        let line2 = document.createElement('tr');           //creez a doua linie pentru acelasi produs pentru a pune descrierea
        container.appendChild(line2);

        let item3= document.createElement('td');
        item3.textContent=prod.descriere;
        line2.appendChild(item3);
    }
    
})

/*          tip de date de introdus in postman
{
	"nume":"Iphone X",
	"pret":"4900 RON",
	"descriere":"La iPhone X, dispozitivul este ecranul. Un ecran Super Retina de 5,8 inchi complet nou, care incape perfect in mana si iti incanta ochii. "
}

*/