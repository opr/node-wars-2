import {expect} from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import {Map} from 'immutable';
import AccessToken from '../../src/entities/AccessToken/AccessToken';

describe('Access token class', () => {
  const test = sinonTest(sinon);
  let data;
  let accessToken;

  beforeEach(() => {
    data = {
      id: 'F1C1F53E-FD03-E248-AF53-0A79A6CC7596',
      name: '',
      permissions:
        ['tradingpost',
          'characters',
          'pvp',
          'progression',
          'wallet',
          'guilds',
          'builds',
          'account',
          'inventories',
          'unlocks']
    };
    accessToken = new AccessToken(data);
  });


  describe('constructor', () => {
    it('should set the class properties of id, name and permissions', test(function () {
      expect(accessToken.id).to.equal(data.id);
      expect(accessToken.name).to.equal(data.name);
      expect(accessToken.permissions).to.deep.equal(data.permissions);
    }));
  });

  describe('hasPermission', () => {
    context('token has permission', () => {
      it('should return true if the accessToken has the requested permission', test(function () {
        expect(accessToken.hasPermission('account')).to.be.true;
      }));
    });
    context('token does not have permission', () => {
      it('should return true if the accessToken has the requested permission', test(function () {
        expect(accessToken.hasPermission('fakePermission')).to.not.be.true;
      }));
    });
  });
});
