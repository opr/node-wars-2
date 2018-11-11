import {expect} from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import {Map} from 'immutable';
import AccessToken from '../../src/entities/AccessToken/AccessToken';
import GW2Api from '../../src/GW2Api';
import Network from '../../src/Network';
import request from 'superagent';

describe('Access token class', () => {
  const test = sinonTest(sinon);
  const apiKey = '1234-5678';
  const gw2 = new GW2Api(apiKey);
  let network;

  beforeEach(() => {
    network = new Network(gw2);
  });


  describe('constructor', () => {
    it('should set the class properties of gw2', test(function () {
      expect(network.gw2).to.not.be.empty;
    }));
  });

  describe('rawApiRequest', () => {
    context('without parameters', () => {
      context('successful connection without auth', () => {
        it('should return some data from the server if it is successful', test(function () {
          const mock = this.mock(request);
          mock.expects('get').exactly(1).withArgs('https://api.guildwars2.com/v2/testEndpoint');
          network = new Network(gw2);
          network.rawApiRequest('testEndpoint');
          mock.verify();
        }));
      });
      context('successful connection with auth', () => {
        it('should return some data from the server if it is successful', test(function () {
          const fakeRequest = {
            set: () => {
            }
          };
          const mockedSet = this.mock(fakeRequest);
          mockedSet.expects('set').once().withArgs({Authorization: 'Bearer 1234-5678'});
          const mock = this.mock(request);
          mock.expects('get').exactly(1).withArgs('https://api.guildwars2.com/v2/testEndpoint').returns({set: fakeRequest.set});
          network = new Network(gw2);
          network.rawApiRequest('testEndpoint', null, true);
          mock.verify();
        }));
      });
    });

    context('with parameters', () => {

      it('should call the endpoint with an array of parameters specified', test(function () {
        const fakeRequest = {
          set: () => {
          }
        };
        const mock = this.mock(request);
        mock.expects('get').exactly(1).withArgs('https://api.guildwars2.com/v2/testEndpoint/my/funky/parameters');
        network = new Network(gw2);
        network.rawApiRequest('testEndpoint', ['my', 'funky', 'parameters']);
        mock.verify();
      }));

      it('should call the endpoint with a single parameter specified', test(function () {
        const fakeRequest = {
          set: () => {
          }
        };
        const mock = this.mock(request);
        mock.expects('get').exactly(1).withArgs('https://api.guildwars2.com/v2/testEndpoint/param1');
        network = new Network(gw2);
        network.rawApiRequest('testEndpoint', 'param1');
        mock.verify();
      }));
    });
  });
});
