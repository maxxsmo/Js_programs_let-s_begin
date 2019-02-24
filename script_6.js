const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


entrepreneurs.forEach(element => {
  if(element.year > 1969 && element.year < 1980)
    console.log(element);
});

entrepreneurs.forEach(element => {
  console.log(element.first + " " + element.last);
});


entrepreneurs.forEach(age => {
  let agenow = 2019 - age.year
     console.log("Age qu'il aurait today : " +agenow);
 })


let sortLast = entrepreneurs.sort(function(a,b) {
  if(a.last < b.last) {return -1;}
  if(a.last > b.last) {return 1;}
  return 0;
})
console.log(sortLast);
