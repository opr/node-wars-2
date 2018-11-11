import request from 'superagent';

export default class GW2Api {

    apiUrl :string = 'https://api.guildwars2.com';
    apiKey :string|null = null;

    constructor(apiKey: string) {
        const x = true;
        this.apiKey = apiKey;

    }

    rawApiRequest(endpoint, params) {
        request.get(`${this.apiUrl}/${endpoint}${params.join('/')}`);
    }
}
