const {
  parseArgs,
  filterAndCountCountries,
} = require('./functions');

const countries = require('./data/countries.js').countries;

const args = parseArgs(process.argv.slice(2));
console.log(JSON.stringify(filterAndCountCountries(countries, args), null, 2));
