const countries = require('./data/data.js').data;

const filterRegexp = /--filter=(.+)/;

const parseArgs = args => {
  // Init result
  const argsParsed = { filter: '', count: false, };

  args.forEach(arg => {
    // Check for (first) `--filter=...`
    const filterMatch = arg.match(filterRegexp);
    if (argsParsed.filter === '' && filterMatch && filterMatch[1]) {
      argsParsed.filter = filterMatch[1];
    }

    // Check for `--count`
    argsParsed.count = argsParsed.count || (arg === '--count');
  });

  return argsParsed;
};

const calculateName = (name, count, length) => {
  // Return something like : `name` or `name [1]`
  return [name, (count) ? ` [${length}]`: ''].join('')
};

const filterAndCountCountries = (countries, query) => {
  // Filter (if asked) countries by a query filter, count (if asked) the returned elements.
  return countries.map(country => {
    const peopleFiltered = country.people.map(people => filterAnimals(people, query)).filter(Boolean);
    if (peopleFiltered.length > 0) {
      return {
        name: calculateName(country.name, query.count, peopleFiltered.length),
        people: peopleFiltered,
      }
    }
  }).filter(Boolean);
};

const filterAnimals = (people, query) => {
  // Filter (if asked) people animals in which a string is included, count (if asked) the returned elements.
  const animalsFiltered = people.animals.filter(animal => animal.name.includes(query.filter));
  if (animalsFiltered.length > 0) {
    return {
      name: calculateName(people.name, query.count, animalsFiltered.length),
      animals: animalsFiltered,
    }
  }
};


const args = parseArgs(process.argv.slice(2));
console.log(JSON.stringify(filterAndCountCountries(countries, args), null, 2));


