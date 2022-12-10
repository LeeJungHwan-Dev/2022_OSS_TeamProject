const assert = require('assert');
const changeString = require('../module/officeModule/changeString');

describe('대소문자 및 공백 무시 테스트', () => {
  it('대소문자 무시 테스트 #1', () => {
    assert.equal(
      changeString('Computer Science and Engineering'),
      changeString('cOmPuTeR sCiEnCe AnD eNgInEeRiNg'),
    );
  });

  it('대소문자 무시 테스트 #2', () => {
    assert.equal(
      changeString('Architectural Engineering'),
      changeString('architectural ENGINEERING'),
    );
  });

  it('대소문자 무시 테스트 #3', () => {
    assert.equal(
      changeString('Korean Language and Literature'),
      changeString('kOREAN lANGUAGE AND lITERATURE'),
    );
  });

  it('공백 무시 테스트 #1', () => {
    assert.equal(
      changeString('Mechanical Engineering'),
      changeString('MechanicalEngineering'),
    );
  });

  it('공백 무시 테스트 #2', () => {
    assert.equal(
      changeString('Urban Engineering'),
      changeString('Ur   ban     En     gin    eeri  ng'),
    );
  });

  it('공백 무시 테스트 #3', () => {
    assert.equal(
      changeString('Electronic Engineering'),
      changeString('Elec     tronicEngineering'),
    );
  });

  it('대소문자 및 공백 무시 테스트 #1', () => {
    assert.equal(
      changeString('Mechanical Engineering'),
      changeString('me CHAN ical eng INEE ring'),
    );
  });

  it('대소문자 및 공백 무시 테스트 #2', () => {
    assert.equal(
      changeString('Chemical Engineering'),
      changeString('C  H  E  M  I  C  A  L  E  N  G  I  N  E  E  R  I  N  G'),
    );
  });

  it('대소문자 및 공백 무시 테스트 #3', () => {
    assert.equal(
      changeString('Library and Information Science'),
      changeString('lIbRaRyAnDiNfOrMaTiOnScIeNcE'),
    );
  });
});
