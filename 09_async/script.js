'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const timeout = function (sec){
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request took too long!'))
      , sec * 1000);
  })
}

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(1)
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

