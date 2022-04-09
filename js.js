"usa strict";
const numberOfNews = +prompt('Siz qancha yangilik ko\'rdingiz')
const personaNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    gennes: [],
    privat: false,
};
const a = prompt('oxirgi ko`rgan yangilingizlaridan biri'),
    b = prompt("Unga qancha baho bergan bo`lardiz");
personaNewsDB.news[a] = b;
console.log(personaNewsDB);