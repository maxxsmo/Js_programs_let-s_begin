const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?

books.forEach(element => {
  if(element.rented >= 1)
  console.log(`Le livre ${element.title} a au moins été loué une fois.`)
});

// Quel est livre le plus emprunté ?

  const mostRented = Math.max.apply(Math, books.map(function(book) { return book.rented;}));
    console.log('le livre le plus emprunté est : ');
    console.log(books.find(book => book.rented === mostRented));
 

// Trie les livres par ordre alphabétique

let sortTitle = books.sort(function(a,b) {
  if(a.title < b.title) {return -1;}
  if(a.title > b.title) {return 1;}
  return 0;
})
console.log(sortTitle);