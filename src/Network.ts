import * as request from 'superagent';
import GW2Api from './GW2Api';

export default class Network {

  gw2: GW2Api;

  constructor(gw2: GW2Api) {
    this.gw2 = gw2;
  }

  rawApiRequest(endpoint: string, params: string[] | string | null = null, requiresAuth: boolean = false) {
    if (typeof params === 'string') {
      params = [params];
    }
    /* istanbul ignore next */
    if (process.env.NODE_WARS_2_LOG_LEVEL === 'debug') {
      console.log(`--- NODE-WARS-2 DEBUG - Requesting  ${endpoint} ---`);
    }

    const req = request.get(`${this.gw2.apiUrl}${endpoint}${params !== null ? `/${params.join('/')}` : ''}`);
    if (requiresAuth) {
      req.set({Authorization: `Bearer ${this.gw2.apiKey}`});
    }
    return req;
  }
}
