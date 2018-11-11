import request from 'superagent';
import AccessToken from './entities/AccessToken/AccessToken';
import Network from './Network';

export default class GW2Api {

  apiUrl: string = 'https://api.guildwars2.com/v2/';
  apiKey: string | null = null;
  network: Network;
  accessToken: AccessToken;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.network = new Network(this);
    if (process.env.NODE_WARS_2_LOG_LEVEL === 'debug') {
      console.log('\x1b[33m%s\x1b[0m', `--- 🐛 🐜 NODE-WARS-2 DEBUG - Initialised - api key is ${this.apiKey} ---`);
    }

  }

  tokenInfo(): Promise<AccessToken> {
    return new Promise<AccessToken>((resolve, reject) => {
      const accessTokenRequest = this.network.rawApiRequest('tokeninfo', null, true);
      accessTokenRequest.then(res => {
        const parsedResponse = JSON.parse(res.text);
        this.accessToken = new AccessToken(parsedResponse);
        resolve(this.accessToken);
      })
        .catch(err => {
          if (process.env.NODE_WARS_2_LOG_LEVEL === 'debug') {
            console.log(`--- NODE-WARS-2 DEBUG - ERROR --- ${err}`);
          }
        });
    });
  }
}
