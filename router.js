const fs = require('fs');
const path = require('path');

let produse = [
  {
    "id":"1",
    "nume":"Samsung Galaxy s9+",
    "pret":"4000 RON",
    "descriere":"Samsung Galaxy S9 cu ecran de 5,8 inci are un procesor cu opt nuclee (la 2,7GHz și 1,7GHz, câte patru), 4GB de memorie RAM, conectivitate LTE Cat.18 și spațiu de stocare de 64 sau 256GB. Suportă card microSD de până la 400GB. Bateria este de 3.000 mAh și poate fi încărcat wireless, așa cum Samsung a obișnuit până acum. De asemenea, telefonul rezistă la apă și praf și rulează Android 8 Oreo cu intefața Samsung.",
  },
  {
    "id":"2",
    "nume":"Asus A550V",
    "pret":"2500 RON",
    "descriere":"Proiectat pentru multitasking si divertisment, laptopul Asus X550VX din seria X este un notebook practic pentru toti utilizatorii. Cu un design elegant, avand un finisaj in cercuri concentrice, seria X adauga o nota de rafinament si eleganta. Profilul sau este cu 5% mai subtire decat seria anterioara, gazduind un touchpad mare cu control intuitiv multi-point, mai multe porturi USB 3.0 pentru transfer rapid de date si tehnologia IceCool pentru a mentine palm rest-ul rece."
  }
  
];
let review = [
  {
    "numeProdus":"Samsung Galaxy s9+",
    "review":"Este un telefon foarte bun si sunt multumit de el",
    "nota":"5"
  },
  {
    "numeProdus":"Asus A550v",
    "review":"Nu recomand acest laptop, este foarte lent si bateria nu are o durata excelenta",
    "nota":"2"
  }
  
];

function serveStatic (req, res) {
  if (req.method === 'GET' && req.url === '/produse') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(produse));
  }
  if (req.method === 'POST' && req.url === '/produse') {
    res.statusCode = 200;

    let data = '';
    req.on('data', (chunk) => data += chunk);
    req.on('end', () => {
      produse.push(JSON.parse(data));
      res.end();
      return;
    });
    return res.end(JSON.stringify(produse));
  }

    if (req.method === 'GET' && req.url === '/review') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(review));
    }
    if (req.method === 'POST' && req.url === '/review') {
      res.statusCode = 200;
  
      let dataReview = '';
      req.on('data', (chunk) => dataReview += chunk);
      req.on('end', () => {
        review.push(JSON.parse(dataReview));
        res.end();
        return;
      });
      return res.end(JSON.stringify(review));
    }


  let filePath = path.join(__dirname, req.url);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('File not found on this server');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', getType(req.url));
      res.end(content);
    }
  });
}

function getType (fileName) {
  if (/.html/i.test(fileName))
    return 'text/html';
  if (/.css/i.test(fileName))
    return 'text/css';
  if (/.js/i.test(fileName))
    return 'application/javascript';

  return 'text/plain';
}

module.exports = serveStatic;
