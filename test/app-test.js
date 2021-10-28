const chai = require('chai');

const {
  parseArgs,
  calculateName,
  filterAndCountAnimals,
  filterAndCountCountries,
} = require('../src/functions');

const {
  parseArgsData,
  calculateNameData,
  filterAndCountAnimalsData,
  filterAndCountCountriesData,
} = require('./data/data-test');

chai.should();

describe('app.js', () => {
  describe('parse args', () => {
    parseArgsData.forEach(data => {
      const resData = parseArgs(data.in);
      it(`should be equal to ${JSON.stringify(data.out)}`, async () => {
        resData.filter.should.be.equal(data.out.filter);
        resData.count.should.be.equal(data.out.count);
      });
    });
  });

  describe('calculate name', () => {
    calculateNameData.forEach(data => {
      const resData = calculateName(data.in.name, data.in.count, data.in.length);
      it(`should be equal to ${data.out}`, async () => {
        resData.should.be.equal(data.out);
      });
    })
  });

  describe('filter and count animals', () => {
    filterAndCountAnimalsData.forEach(data => {
      const resData = filterAndCountAnimals(data.in.people, data.in.query);
      it(`should filter animals with "${data.in.query.filter}" ${(data.in.query.count) ? 'and count it': ''}`, async () => {
        resData.name.should.be.equal(data.out.name);
        resData.animals.should.be.eql(data.out.animals);
      });
    });
  });

  describe('filter and count countries', () => {
    filterAndCountCountriesData.forEach(data => {
      const resData = filterAndCountCountries(data.in.countries, data.in.query);
      it(`should filter countries with "${data.in.query.filter}" ${(data.in.query.count) ? 'and count it': ''}`, async () => {
        resData.should.be.eql(data.out);
      });
    });
  });
});
