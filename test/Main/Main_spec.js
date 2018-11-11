import {expect} from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import {Map} from 'immutable';
import GW2Api from '../../src/GW2Api';

describe('Main class', () => {
  const test = sinonTest(sinon);
  let gw2Api = null;
  beforeEach(() => {
    //gw2Api = null;
    gw2Api = new GW2Api('ABC');
  });

  it('should accept an api key and add it to the class\'s properties', function () {
    const gw2Api = new GW2Api('ABCDEF-GHIJK');
    expect(gw2Api.apiKey).to.equal('ABCDEF-GHIJK');
  });

  describe('getApiKey', () => {
    it('should return an object with a key and a name', test(function () {


    }));
  });

  describe('rawApiRequest', () => {
    it('should make a request to the gw2 api URL with the parameters in order', test(function () {
      const expectedUrl = '';
    }));
  });
});
